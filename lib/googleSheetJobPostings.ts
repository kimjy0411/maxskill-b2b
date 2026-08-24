import type { JobPosting, JobPostingStatus } from "@/data/careers";

const HEADER_ALIASES: Record<string, keyof RowFields> = {
  id: "id",
  번호: "id",
  공고일자: "postedAt",
  postedat: "postedAt",
  채용명: "title",
  title: "title",
  접수시작: "periodStart",
  접수종료: "periodEnd",
  접수기간: "period",
  period: "period",
  상태: "status",
  status: "status",
  조회: "views",
  views: "views",
  내용: "content",
  content: "content",
  채용구분: "hireType",
  채용: "hireType",
  hiretype: "hireType",
  지원: "experience",
  experience: "experience",
  학력: "education",
  education: "education",
  채용분야: "field",
  field: "field",
  담당업무: "duty",
  duty: "duty",
  자격요건: "qualification",
  qualification: "qualification",
  채용인원: "headcount",
  headcount: "headcount",
  공통자격: "commonQualifications",
  전형방법: "process",
  접수방법: "applyMethod",
  기타사항: "notes",
  담당자: "contactName",
  부서: "contactDept",
  문의전화: "contactPhone",
  "e-mail": "contactEmail",
  email: "contactEmail",
};

interface RowFields {
  id: string;
  postedAt: string;
  title: string;
  periodStart: string;
  periodEnd: string;
  period: string;
  status: string;
  views: string;
  content: string;
  hireType: string;
  experience: string;
  education: string;
  field: string;
  duty: string;
  qualification: string;
  headcount: string;
  commonQualifications: string;
  process: string;
  applyMethod: string;
  notes: string;
  contactName: string;
  contactDept: string;
  contactPhone: string;
  contactEmail: string;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(cell.trim());
      cell = "";
    } else if (char === "\n" || (char === "\r" && text[i + 1] === "\n")) {
      row.push(cell.trim());
      if (row.some((value) => value.length > 0)) {
        rows.push(row);
      }
      row = [];
      cell = "";
      if (char === "\r") i++;
    } else {
      cell += char;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell.trim());
    if (row.some((value) => value.length > 0)) {
      rows.push(row);
    }
  }

  return rows;
}

function normalizeDate(value: string): string {
  const digits = value.replace(/[./]/g, "-").trim();
  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(digits)) {
    const [year, month, day] = digits.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return value.trim();
}

function formatDisplayDate(value: string): string {
  const normalized = normalizeDate(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    return normalized.replace(/-/g, ".");
  }
  return value.trim();
}

function parseDate(value?: string): Date | null {
  if (!value) return null;
  const normalized = normalizeDate(value);
  const date = new Date(`${normalized}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function resolveJobStatus(
  status: string | undefined,
  periodEnd?: string,
): JobPostingStatus {
  const normalized = status?.trim();
  if (normalized === "마감") return "마감";

  const end = parseDate(periodEnd);
  if (end) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (end < today) return "마감";
  }

  return "진행중";
}

function splitContent(value: string): string[] {
  return value
    .split(/\r?\n|\/\//)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function isHeaderRow(cells: string[]): boolean {
  return cells.some(
    (cell) => HEADER_ALIASES[cell.trim().toLowerCase()] !== undefined,
  );
}

function buildColumnMap(headerRow: string[]): (keyof RowFields | null)[] {
  return headerRow.map((cell) => HEADER_ALIASES[cell.trim().toLowerCase()] ?? null);
}

function mapRow(
  cells: string[],
  columnMap: (keyof RowFields | null)[],
  fallbackId: number,
): JobPosting | null {
  const fields: Partial<RowFields> = {};

  columnMap.forEach((key, index) => {
    if (!key) return;
    fields[key] = cells[index]?.trim() ?? "";
  });

  const title = fields.title?.trim();
  if (!title) return null;

  const periodStart = fields.periodStart?.trim();
  const periodEnd = fields.periodEnd?.trim();
  const period =
    fields.period?.trim() ||
    (periodStart && periodEnd
      ? `${formatDisplayDate(periodStart)} ~ ${formatDisplayDate(periodEnd)}`
      : periodStart || periodEnd || "-");

  const parsedId = Number.parseInt(fields.id ?? "", 10);

  return {
    id: Number.isFinite(parsedId) && parsedId > 0 ? parsedId : fallbackId,
    postedAt: normalizeDate(fields.postedAt ?? "") || new Date().toISOString().slice(0, 10),
    title,
    period,
    periodEnd: periodEnd ? normalizeDate(periodEnd) : undefined,
    status: resolveJobStatus(fields.status, periodEnd),
    views: Number.parseInt(fields.views ?? "0", 10) || 0,
    content: splitContent(fields.content ?? ""),
    hireType: fields.hireType?.trim() || undefined,
    experience: fields.experience?.trim() || undefined,
    education: fields.education?.trim() || undefined,
    field: fields.field?.trim() || undefined,
    duty: fields.duty?.trim() || undefined,
    qualification: fields.qualification?.trim() || undefined,
    headcount: fields.headcount?.trim() || undefined,
    commonQualifications: splitContent(fields.commonQualifications ?? ""),
    process: splitContent(fields.process ?? ""),
    applyMethod: splitContent(fields.applyMethod ?? ""),
    notes: splitContent(fields.notes ?? ""),
    contactName: fields.contactName?.trim() || undefined,
    contactDept: fields.contactDept?.trim() || undefined,
    contactPhone: fields.contactPhone?.trim() || undefined,
    contactEmail: fields.contactEmail?.trim() || undefined,
  };
}

export async function fetchJobPostingsFromGoogleSheet(
  csvUrl: string,
): Promise<JobPosting[]> {
  const response = await fetch(csvUrl, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Google Sheet careers CSV fetch failed: ${response.status}`);
  }

  const text = await response.text();
  const rows = parseCsv(text);
  if (rows.length === 0) return [];

  const hasHeader = isHeaderRow(rows[0]);
  const dataRows = hasHeader ? rows.slice(1) : rows;
  const columnMap: (keyof RowFields | null)[] = hasHeader
    ? buildColumnMap(rows[0])
    : [
        "id",
        "postedAt",
        "title",
        "periodStart",
        "periodEnd",
        "status",
        "views",
        "hireType",
        "experience",
        "education",
        "field",
        "duty",
        "qualification",
        "headcount",
        "commonQualifications",
        "process",
        "applyMethod",
        "notes",
        "contactName",
        "contactDept",
        "contactPhone",
        "contactEmail",
        "content",
      ];

  return dataRows
    .map((cells, index) => mapRow(cells, columnMap, index + 1))
    .filter((posting): posting is JobPosting => posting !== null)
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt));
}
