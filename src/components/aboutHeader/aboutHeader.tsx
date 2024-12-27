import Button from "../button/Button";
import Image from "next/image";
import styles from "../../styles/aboutHeader.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutHeader() {
  const t = useTranslations("AboutHeader");
  const tb = useTranslations("Button");

  return (
    <div className={styles.about}>
      <div className={styles.about_left}>
        <div className={styles.about_left_top}>
          <div className={styles.about_left_top_image}>
            <Image
              width={936}
              height={0}
              src="/images/about/AboutLine.svg"
              alt="AboutLine"
              style={{
                height: "auto",
                width: "936px",
              }}
            />
          </div>
          <div className={styles.about_left_top_image2}>
            <Image
              width={203}
              height={0}
              src="/images/about/AboutLine2.svg"
              alt="AboutLine"
              style={{
                height: "auto",
                width: "500px",
              }}
            />
          </div>
          <h2>{t("title")}</h2>
        </div>
        <div className={styles.about_left_bottom}>
          <p>{t("description1")}</p>
          <p className={styles.left_p}>{t("description2")}</p>
          <Link href={"#feedback"} className="smd:w-full smd:px-[10px]">
            <Button className={styles.about_left_bottom_button}>
              {tb("button2")}
            </Button>
          </Link>
        </div>
      </div>
      <p className={styles.about_right}>{t("description3")}</p>
    </div>
  );
}
