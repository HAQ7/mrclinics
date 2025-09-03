"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";

export default function LangButton() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    startTransition(() => {
      // Set cookie with the new locale
      document.cookie = `locale=${newLocale}; path=/; max-age=${
        60 * 60 * 24 * 365
      }`; // 1 year expiration

      // Refresh the page to apply the new locale
      window.location.reload();
    });
  };

  return (
    <button
      onClick={handleLanguageChange}
      disabled={isPending}
      className={`
        px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 z-50
        ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
       
      `}
      aria-label={`Switch to ${locale === "ar" ? "English" : "Arabic"}`}
    >
      {isPending ? "..." : locale === "ar" ? "English" : "العربية"}
    </button>
  );
}
