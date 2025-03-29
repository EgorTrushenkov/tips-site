import Image from "next/image";
import styles from "../../styles/aboutTeam.module.scss";
import { useTranslations } from "next-intl";

export default function AboutTeam() {
  const t = useTranslations("AboutTeam");

  return (
    <div className={styles.about_team_wrapper}>
      <div className={styles.about_team}>
        <h3>{t("title")}</h3>
        <p>{t("description1")}</p>
        <p>{t("description2")}</p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/about/aboutTeam.webp"
          alt="aboutTeam"
          width={1071}
          height={343}
        />
      </div>
    </div>
  );
}
