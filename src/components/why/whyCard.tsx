import styles from "../../styles/why.module.scss";
import Image from "next/image";

interface WhyProps {
  description: string;
  imageSrc: string;
}

const WhyCard: React.FC<WhyProps> = ({ description, imageSrc }) => {
  return (
    <>
      <div className={styles.why_card}>
        <Image
          className={styles.why_image}
          src={`${imageSrc}`}
          alt="whyImage"
          width={150}
          height={150}
        />
        <p>{description}</p>
      </div>
    </>
  );
};

export default WhyCard;
