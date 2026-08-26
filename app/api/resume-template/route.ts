import { readFile } from "fs/promises";
import path from "path";

const FILE_PATH = path.join(
  process.cwd(),
  "public",
  "files",
  "maxskill-resume-template.docx",
);
const DOWNLOAD_NAME = "(주)맥스킬 이력서.docx";

export async function GET() {
  try {
    const file = await readFile(FILE_PATH);
    const encodedName = encodeURIComponent(DOWNLOAD_NAME);

    return new Response(file, {
      headers: {
        "Content-Type": "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        "Content-Disposition": `attachment; filename="resume.docx"; filename*=UTF-8''${encodedName}`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("이력서 양식을 찾을 수 없습니다.", { status: 404 });
  }
}
