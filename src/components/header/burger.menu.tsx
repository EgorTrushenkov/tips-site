"use client";

import styles from "../../styles/burger-menu.module.scss";
import { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../button/Button";
import { useTranslations } from "next-intl";
import Navigation from "../navigation/nav.menu";

export default function BurgerMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const burgerTrue: string = [styles.burger_menu, styles.open].join(" ");
  const burgerFalse: string = [styles.burger_menu].join(" ");
  const t = useTranslations("Button");
  return (
    <>
      <button
        className={
          menuActive ? [styles.wrapper, styles.open].join(" ") : styles.wrapper
        }
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={menuActive ? burgerTrue : burgerFalse}>
        <Navigation menuActive={menuActive} setMenuActive={setMenuActive} />
        <Link
          href={"#feedback"}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <ButtonComponent className={styles.header_button}>
            {t("button")}
          </ButtonComponent>
        </Link>
      </div>
    </>
  );
}
