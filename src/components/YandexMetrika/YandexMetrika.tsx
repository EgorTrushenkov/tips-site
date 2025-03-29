"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    ym: (id: number, type: string, url: string) => void;
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    window.ym(98342954, "hit", url);
  }, [pathname, searchParams]);

  return null;
}
