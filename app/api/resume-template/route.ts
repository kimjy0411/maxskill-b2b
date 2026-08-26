import { readFile } from "fs/promises";
import path from "path";

const FILE_PATH = path.join(
  process.cwd(),
  "public",
  "files",
  "maxskill-resume-template.docx",
);
const DOWNLOAD_NAME = "맥스킬_이력서양식.docx";

export async function GET() {
  try {
    const file = await readFile(FILE_PATH);
    return new Response(file, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"; filename*=UTF-8''${encodeURIComponent(DOWNLOAD_NAME)}`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("이력서 양식을 찾을 수 없습니다.", { status: 404 });
  }
}
