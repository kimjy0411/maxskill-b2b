"use client";

interface ResumeTemplateDownloadProps {
  bordered?: boolean;
}

export default function ResumeTemplateDownload({
  bordered = false,
}: ResumeTemplateDownloadProps) {
  async function handleDownload() {
    const response = await fetch("/api/resume-template");
    if (!response.ok) {
      window.alert("이력서 양식을 아직 받을 수 없습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "맥스킬_이력서양식.docx";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className={
        bordered
          ? "border-t border-dashed border-white/15 py-5 last:pb-0"
          : "rounded-2xl border border-white/10 px-5 py-6 sm:px-7"
      }
    >
      <p className="font-bold text-white">▣ 이력서 양식 다운로드</p>
      <button
        type="button"
        onClick={handleDownload}
        className="mt-3 text-sm font-semibold text-brand-blue hover:underline"
      >
        이력서 양식 다운로드
      </button>
    </div>
  );
}
