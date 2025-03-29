import localFont from "next/font/local";
import styles from "../../styles/price.module.scss"

const ActayWide = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
});

interface PriceProps {
  title: string;
  description: string;
  price: string;
}

const PriceList: React.FC<PriceProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <div className={styles.priceList}>
      <div className={styles.priceList_header}>
        <h3 className={ActayWide.className}>{title}</h3>
        <div className={styles.priceList_header_price}>{price}</div>
      </div>
      <span className={styles.priceList_span}/>
      <p className={styles.priceList_header_description}>{description}</p>
    </div>
  );
};

export default PriceList;
