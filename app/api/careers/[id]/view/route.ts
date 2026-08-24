import { NextResponse } from "next/server";
import { readLocalJobPostings, writeLocalJobPostings } from "@/lib/jobBoardStore";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "잘못된 공고입니다." }, { status: 400 });
  }

  if (process.env.GOOGLE_SHEETS_CAREERS_CSV_URL) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const postings = await readLocalJobPostings();
  const index = postings.findIndex((posting) => posting.id === id);
  if (index < 0) {
    return NextResponse.json({ error: "공고를 찾을 수 없습니다." }, { status: 404 });
  }

  postings[index] = {
    ...postings[index],
    views: postings[index].views + 1,
  };

  try {
    await writeLocalJobPostings(postings);
  } catch {
    return NextResponse.json({ ok: true, skipped: true });
  }

  return NextResponse.json({ ok: true, views: postings[index].views });
}
