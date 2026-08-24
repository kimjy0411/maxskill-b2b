import { jobPostings as fallbackJobPostings } from "@/data/careers";
import type { JobPosting } from "@/data/careers";
import {
  fetchJobPostingsFromGoogleSheet,
  resolveJobStatus,
} from "@/lib/googleSheetJobPostings";

function withResolvedStatus(postings: JobPosting[]): JobPosting[] {
  return postings.map((posting) => ({
    ...posting,
    status: resolveJobStatus(posting.status, posting.periodEnd),
  }));
}

export async function getJobPostings(): Promise<JobPosting[]> {
  const csvUrl = process.env.GOOGLE_SHEETS_CAREERS_CSV_URL;

  if (!csvUrl) {
    return withResolvedStatus(fallbackJobPostings);
  }

  try {
    const sheetPostings = await fetchJobPostingsFromGoogleSheet(csvUrl);
    if (sheetPostings.length === 0) {
      console.warn(
        "Google Sheet returned no valid job postings; using local fallback.",
      );
      return withResolvedStatus(fallbackJobPostings);
    }
    return sheetPostings;
  } catch (error) {
    console.error("Failed to load job postings from Google Sheet:", error);
    return withResolvedStatus(fallbackJobPostings);
  }
}

export async function getJobPosting(id: number): Promise<JobPosting | undefined> {
  const postings = await getJobPostings();
  return postings.find((posting) => posting.id === id);
}
