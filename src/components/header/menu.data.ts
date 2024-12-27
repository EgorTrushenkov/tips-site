import { useTranslations } from "next-intl";

const MenuProvider = () => {
  const t = useTranslations("NavMenu");

  const getMenu = () => {
    return [
      {
        name: t("home"),
        link: "/",
        target: '',
        id: 1,
      },
      {
        name: t("portfolio"),
        link: "/#portfolio",
        target: '',
        id: 2,
      },
      {
        name: t("aboutStudio"),
        link: "/about",
        target: '',
        id: 3,
      },
      {
        name: t("learnStudio"),
        link: "https://t.me/courses_webstudio_tips",
        target: '_blank',
        id: 4,
      },
      {
        name: t("contacts"),
        link: "/#feedback",
        target: '',
        id: 5,
      },
    ];
  };

  return getMenu();
};
export default MenuProvider;
