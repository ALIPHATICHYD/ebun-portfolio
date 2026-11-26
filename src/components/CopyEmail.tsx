"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "./Icons";

/** Copies the email address; shows the address itself so it still works where clipboard is blocked. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-paper" aria-live="polite">
      <span
        className={`grid transition-[opacity,filter,width] duration-300 ${
          copied ? "w-[18px] opacity-100 blur-0" : "w-0 opacity-0 blur-[4px]"
        }`}
      >
        <Check size={18} />
      </span>
      {copied ? "Copied!" : email}
    </button>
  );
}
