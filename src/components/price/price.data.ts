import { useTranslations } from "next-intl";

const PriceProvider = () => {
  const t = useTranslations("Price");

  const getPrice = {
    price: [
      {
        title: t("title1"),
        id: 1,
      },
      {
        title: t("title2"),
        id: 2,
      },
      {
        title: t("title3"),
        id: 3,
      },
      {
        title: t("title4"),
        id: 4,
      },
      {
        title: t("title5"),
        id: 5,
      },
      {
        title: t("title6"),
        id: 6,
      },
    ],

    price2: [
      {
        title: t("title7"),
        id: 1,
      },
      {
        title: t("title8"),
        id: 2,
      },
      {
        title: t("title9"),
        id: 3,
      },
      {
        title: t("title10"),
        id: 4,
      },
      {
        title: t("title11"),
        id: 5,
      },
    ],

    price3: [
      {
        title: t("title12"),
        id: 1,
      },
      {
        title: t("title13"),
        id: 2,
      },
      {
        title: t("title14"),
        id: 3,
      },
      {
        title: t("title15"),
        id: 4,
      },
    ],

    priceList: [
      {
        title: t("title16"),
        price: t("price1"),
        description: t("description1"),
        id: 1,
      },
      {
        title: t("title17"),
        price: t("price2"),
        description: t("description2"),
        id: 2,
      },
      {
        title: t("title18"),
        price: t("price3"),
        description: t("description3"),
        id: 3,
      },
      {
        title: t("title19"),
        price: t("price4"),
        description: t("description4"),
        id: 4,
      },
    ],
  };

  return getPrice;
};

export default PriceProvider;

