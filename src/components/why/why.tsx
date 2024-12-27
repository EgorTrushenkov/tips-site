import localFont from "next/font/local";
import styles from "../../styles/why.module.scss";
import WhyCard from "./whyCard";
import WhyProvider from "./why.data";
import { useTranslations } from "next-intl";

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

export default function Why() {
  const why = WhyProvider();
  const t = useTranslations("Why");
  return (
    <div className={styles.why} id="why">
      <div className="flex bg-transparent">
        <h2 className={styles.h2}>{t("title1")}&nbsp;</h2>
        <h2 className={styles.h2_we}>{t("title2")}</h2>
      </div>
      <h3 className={ActayWide.className}>WHY</h3>
      <div className={styles.cards_wrapper}>
        {why.map((item) => (
          <WhyCard
            description={item.description}
            imageSrc={item.imageSrc}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
