import { useTranslations } from "next-intl";
import styles from "../../styles/aboutInfo.module.scss";

export default function AboutInfo() {
  const t = useTranslations("AboutInfo");

  return (
    <div className="flex gap-8 justify-between bg-inherit lg:flex-col lg:gap-4">
      <div className={styles.about_info_block}>
        <h3>{t("title1")}</h3>
        <p>{t("description1")}</p>
      </div>
      <div className={styles.about_info_block}>
        <h3>{t("title2")}</h3>
        <p>{t("description2")}</p>
      </div>
      <div className={styles.about_info_block}>
        <h3>{t("title3")}</h3>
        <p>{t("description3")}</p>
      </div>
    </div>
  );
}
