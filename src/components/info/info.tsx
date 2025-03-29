import Link from "next/link";
import styles from "../../styles/info.module.scss";
import ButtonComponent from "../button/Button";
import Circle from "../circle/circle";
import Dropdown from "./drop.info";
import { useLocale, useTranslations } from "next-intl";
import BlockInfo from "./block";

interface InfoProps {
  className?: string;
}

const Info: React.FC<InfoProps> = ({ className }) => {
  const localActive = useLocale();
  const t = useTranslations("Info");
  const tb = useTranslations("Button");

  return (
    <div className={`${styles.mainInfo} ${className}`}>
      <div className={`${styles.left} ${localActive === "ru" ? styles.leftRu : styles.leftEn}`}>
        <div className={styles.left_header}>
          <h2>{t("headerLeft1")}</h2>
          <h2 className={styles.h2}>{t("headerLeft2")}</h2>
        </div>
        <p>
          <b>{t("descriptionLeft1")}</b>
          <br />
          {t("descriptionLeft2")}
        </p>
        <Link href={"#feedback"}>
          <ButtonComponent className={styles.button}>
            {tb("button2")}
          </ButtonComponent>
        </Link>
      </div>
      <Circle
        width="796px"
        height="796px"
        color="linear-gradient(90deg, #FAFF00 0%, #FF0000 100%)"
        blur={250}
        left="-238px"
        top="490px"
        zIndex={0}
        className="lg:hidden"
      />
      <div className={styles.right}>
        <h3>{t("headerRight")}</h3>
        <div className={styles.block_wrapper}>
          <BlockInfo />
        </div>
        <Dropdown
          openHeader={styles.openHeader}
          first={tb("button3")}
          second={tb("button4")}
        >
          <BlockInfo />
        </Dropdown>
      </div>
    </div>
  );
};

export default Info;
