"use client";

import { useEffect } from "react";

export default function JobPostingViewTracker({ id }: { id: number }) {
  useEffect(() => {
    const key = `career-viewed-${id}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    void fetch(`/api/careers/${id}/view`, { method: "POST" });
  }, [id]);

  return null;
}
