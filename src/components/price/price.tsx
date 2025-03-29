import localFont from "next/font/local";
import styles from "../../styles/price.module.scss";
import ButtonComponent from "../button/Button";
import PriceList from "./priceList";
import Circle from "../circle/circle";
import Link from "next/link";
import PriceProvider from "./price.data";
import { useTranslations } from "next-intl";

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

export default function Price() {
  const price = PriceProvider().price;
  const price2 = PriceProvider().price2;
  const price3 = PriceProvider().price3;
  const priceList = PriceProvider().priceList;
  const t = useTranslations("Price");
  const tb = useTranslations("Button");

  return (
    <div className={styles.price_wrapper}>
      {/* левый блок */}
      <div className={styles.price}>
        <h3 className={styles.h3}>{t("header")}</h3>
        {/* буквы на фоне, ОТ НИХ ЗАВИСИТ ШИРИНА БЛОКА, Т.К. ВСЕ ОСТАЛЬНЫЕ ЭЛЕМЕНТЫ pos:absolute */}
        <h3 className={ActayWide.className}>PRICE</h3>
        {/* описание */}
        <div className={styles.info}>
          <p>{t("headerInfo1")}</p>
          <p className={styles.p}>{t("headerInfo2")}</p>
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
          <Link href={"#feedback"}>
            <ButtonComponent className={styles.button}>
              {tb("button2")}
            </ButtonComponent>
          </Link>
        </div>
      </div>
      {/* правый блок */}
      <div className={styles.price_right}>
        {priceList.map((item) => (
          <PriceList
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
          />
        ))}
        <Link href={"#feedback"}>
          <ButtonComponent className={styles.button_right}>
            {tb("button2")}
          </ButtonComponent>
        </Link>
        <Circle
          width="clamp(10.25rem, 8.089rem + 9.35vw, 16.5rem)"
          height="clamp(12.5rem, 10.339rem + 9.35vw, 18.75rem)"
          color="rgba(248, 137, 12, 0.5)"
          blur={75}
          right="clamp(-10rem, -12.593rem + 11.21vw, -2.5rem)"
          bottom="-107px"
          className="xl:hidden"
        />
      </div>
    </div>
  );
}
