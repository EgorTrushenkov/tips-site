import { useTranslations } from "next-intl";
import styles from "../../styles/info.module.scss";
import PriceProvider from "../price/price.data";

export default function BlockInfo() {
  const price = PriceProvider().price;
  const price2 = PriceProvider().price2;
  const price3 = PriceProvider().price3;

  const t = useTranslations("Info");
  const tp = useTranslations("Price");

  return (
    <>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <div>01</div>
          <p>{t("headerRight1")}</p>
        </div>
        <p className={styles.block_description}>{t("descriptionRight1")}</p>
      </div>
      <span></span>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <div>02</div>
          <p>{t("headerRight2")}</p>
        </div>
        <p className={styles.block_description}>{t("descriptionRight2")}</p>
      </div>
      <span></span>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <div>03</div>
          <p>{t("headerRight3")}</p>
        </div>
        <div className={styles.info}>
          <p>{tp("headerInfo1")}</p>
          <p className={styles.p}>{tp("headerInfo2")}</p>
          <ul>
            {price.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <p className={styles.p}>CMS ( WordPress )</p>
          <ul>
            {price2.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <p className={styles.p}>Tilda</p>
          <ul>
            {price3.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span></span>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <div>04</div>
          <p>{t("headerRight4")}</p>
        </div>
        <p className={styles.block_description}>
          {t("descriptionRight3")}
          <br />
          <br />
          {t("descriptionRight4")}
          <br />
          <br />
          {t("descriptionRight5")}
        </p>
      </div>
      <span></span>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <div>05</div>
          <p>{t("headerRight5")}</p>
        </div>
        <p className={styles.block_description}>{t("descriptionRight6")}</p>
      </div>
    </>
  );
}
