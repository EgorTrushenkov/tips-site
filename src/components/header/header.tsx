"use client";

import { Link } from "@/i18n/routing";
import BurgerMenu from "./burger.menu";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import ButtonComponent from "../button/Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcherButton";
import Navigation from "../navigation/nav.menu";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const tb = useTranslations("Button");

  return (
    <>
      <header className={styles.header}>
        <LanguageSwitcher />
        <div className={styles.header_left}>
          <Link href="/">
            <Image
              src="/images/tips.svg"
              width="0"
              height="0"
              alt="tips"
              loading="lazy"
              style={{ width: "185px", height: "auto" }}
              className={styles.tips}
            />
          </Link>
          <p className="text-base leading-4">{t("description")}</p>
        </div>
        <div className={styles.header_right}>
          <nav className={styles.nav}>
            <Navigation />
          </nav>
          <Link href={"#feedback"}>
            <ButtonComponent className={styles.header_button}>
              {tb("button")}
            </ButtonComponent>
          </Link>
        </div>
        <BurgerMenu />
      </header>
    </>
  );
}
