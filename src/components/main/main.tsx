import ButtonComponent from "../button/Button";
import styles from "../../styles/main.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("Main");
  return (
    <>
      <div className={styles.main_wrapper} id="main">
        <h1 className={styles.h1}>{t("title")}</h1>
        <p className={styles.p}>{t("description")}</p>
        <Link href={"#feedback"}>
          <ButtonComponent className={styles.button}>
            {t("button")}
          </ButtonComponent>
        </Link>
      </div>
      {/* логотипы */}
      <div
        className="flex gap-[62px] justify-center mt-7 mb-16 overflow-x-auto w-full xxl:justify-start lg:mb-[90px]"
        style={{ scrollbarWidth: "none", overflowY: "hidden" }}
      >
        <Image
          src="/images/logos/logo1.svg"
          alt="logo1"
          width="0"
          height="0"
          style={{ width: "83px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo2.svg"
          alt="logo2"
          width="0"
          height="0"
          style={{ width: "116px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo3.svg"
          alt="logo3"
          width="0"
          height="0"
          style={{ width: "200px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo4.svg"
          alt="logo4"
          width="0"
          height="0"
          style={{ width: "111px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo5.svg"
          alt="logo5"
          width="0"
          height="0"
          style={{ width: "113px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo6.svg"
          alt="logo6"
          width="0"
          height="0"
          style={{ width: "199px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo7.svg"
          alt="logo7"
          width="0"
          height="0"
          style={{ width: "233px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo8.svg"
          alt="logo8"
          width="0"
          height="0"
          style={{ width: "87px", height: "auto" }}
        />
        <Image
          src="/images/logos/logo9.svg"
          alt="logo9"
          width="0"
          height="0"
          style={{ width: "193px", height: "auto" }}
        />
      </div>
    </>
  );
}
