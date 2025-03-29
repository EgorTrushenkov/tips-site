"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import styles from "../../styles/header.module.scss";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleImageClick = () => {
    const nextLocale = localActive === "ru" ? "en" : "ru";
    startTransition(() => {
      const currentPath = pathname;
      let newPath = `/${nextLocale}${currentPath.substring(3)}`;
      const params = searchParams.toString();
      if (params) {
        newPath += `?${params}`;
      }
      router.replace(newPath);
    });
  };
  return (
    <div className="h-[49px] order-1 slg:order-none lg:h-[28px]">
      <Image
        src={localActive === "ru" ? "/images/ru.svg" : "/images/en.svg"}
        width={0}
        height={0}
        alt={localActive}
        style={{
          width: "auto",
          height: "100%",
        }}
        className={`${styles.ru} ${isPending ? styles.disabled : ""}`}
        onClick={handleImageClick}
      />
    </div>
  );
}
