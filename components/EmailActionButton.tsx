"use client";

import { useState, type ReactNode } from "react";

interface EmailActionButtonProps {
  email: string;
  label: string;
  subject?: string;
  variant?: "filled" | "outline";
  children?: ReactNode;
}

function buildMailto(email: string, subject?: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${params}`;
}

function buildGmailUrl(email: string, subject?: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });
  if (subject) params.set("su", subject);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export default function EmailActionButton({
  email,
  label,
  subject,
  variant = "filled",
  children,
}: EmailActionButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const buttonClass =
    variant === "filled"
      ? "inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:brightness-110"
      : "brand-font inline-flex rounded-full border border-brand-blue px-6 py-3 text-sm text-brand-blue transition-colors hover:bg-brand-blue hover:text-white";

  async function handleOpen() {
    setOpen(true);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={handleOpen} className={buttonClass}>
          {label}
        </button>
        {children}
      </div>

      {open && (
        <div className="mt-4 max-w-xl rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-sm font-bold text-white">받는 사람</p>
          <p className="mt-1 break-all text-brand-blue">{email}</p>
          {subject && (
            <>
              <p className="mt-4 text-sm font-bold text-white">제목</p>
              <p className="mt-1 break-keep text-sm text-gray-300">{subject}</p>
            </>
          )}
          <p className="mt-3 text-sm text-gray-400">
            {copied
              ? "이메일 주소가 복사되었습니다. 아래에서 메일을 작성하세요."
              : "메일 앱이 없어도 아래에서 바로 작성할 수 있습니다."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={buildGmailUrl(email, subject)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:brightness-110"
            >
              Gmail에서 작성
            </a>
            <a
              href={buildMailto(email, subject)}
              className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-gray-200 transition-colors hover:border-white/40"
            >
              메일 앱으로 열기
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-gray-200 transition-colors hover:border-white/40"
            >
              {copied ? "주소 복사됨" : "주소 복사"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
