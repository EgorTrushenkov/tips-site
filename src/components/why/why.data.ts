import { useTranslations } from "next-intl";

const WhyProvider = () => {
  const t = useTranslations("Why");

  const getWhy = () => {
    return [
      {
        description: t("description1"),
        imageSrc: "/images/why/whyImage1.webp",
        id: 1,
      },
      {
        description: t("description2"),
        imageSrc: "/images/why/whyImage2.webp",
        id: 2,
      },
      {
        description: t("description3"),
        imageSrc: "/images/why/whyImage3.webp",
        id: 3,
      },
      {
        description: t("description4"),
        imageSrc: "/images/why/whyImage4.webp",
        id: 4,
      },
    ];
  };

  return getWhy();
};
export default WhyProvider;
