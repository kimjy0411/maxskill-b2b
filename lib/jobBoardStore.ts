import { promises as fs } from "fs";
import path from "path";
import type { JobPosting } from "@/data/careers";
import fallbackJobPostings from "@/data/job-board.json";
import { resolveJobStatus } from "@/lib/googleSheetJobPostings";

const BOARD_PATH = path.join(process.cwd(), "data", "job-board.json");

function withResolvedStatus(postings: JobPosting[]): JobPosting[] {
  return postings
    .map((posting) => ({
      ...posting,
      status: resolveJobStatus(posting.status, posting.periodEnd),
    }))
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt) || b.id - a.id);
}

export function getFallbackJobPostings(): JobPosting[] {
  return withResolvedStatus(fallbackJobPostings as JobPosting[]);
}

export async function readLocalJobPostings(): Promise<JobPosting[]> {
  try {
    const raw = await fs.readFile(BOARD_PATH, "utf8");
    return withResolvedStatus(JSON.parse(raw) as JobPosting[]);
  } catch {
    return getFallbackJobPostings();
  }
}
