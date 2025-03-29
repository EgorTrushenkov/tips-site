"use client";

import styles from "../../styles/feedback.module.scss";
import Image from "next/image";
import { Button, Group, MantineProvider, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { sendMessage } from "@/api/telegram";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Feedback() {
  // Инициализация формы и её значений
  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      phone: "",
      radio: "Сайт",
      text: "",
    },
    // validate: {
    //   phone: (value) =>
    //     /^\+7|8\d{3}\d{3}\d{2}\d{2}$/.test(value)
    //       ? null
    //       : "Неправильный номер телефона",
    // },
  });

  const [activeButton, setActiveButton] = useState("Другое");
  // Фукнция смены значения radio в сообщении
  const handleOnClickRadio = (e: any) => {
    const valuebtn = e.target.textContent;
    form.setFieldValue("radio", `${valuebtn}`);
    setActiveButton(e.target.textContent);
  };

  const [isLoading, setLoading] = useState(false);

  // Фукнция отправки сообщения в Telegram
  const handleSubmit = async (values: typeof form.values): Promise<void> => {
    try {

      const now = Date.now(); // текущее время в миллисекундах
      //console.log(now); // 1679122786889
      const data = new Date(now);
      const currentDate = data.toLocaleDateString('ru-RU', {
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',
      }); //  // создание нового объекта Date
      //console.log(currentDate)
      const message = `<b>Имя:</b> ${values.name}\n<b>Телефон:</b> ${values.phone}\n<b>Вид работы:</b> ${values.radio}\n<b>Референс:</b> ${values.text}\n<b>Дата заявки:</b> ${currentDate}`;
      await sendMessage(message);
      setLoading(true);
    } catch (e) {
      form.setFieldError("text", "Ошибка");
    } finally {
      setLoading(false);
      form.reset();
      form.setFieldError("text", "Заявка успешно отправлена");
    }
  };
  //WhatsApp
  const phoneNumber = "+79968085818";
  function handleWhatsAppButtonClick() {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }
  //Telegram
  const username = "https://t.me/webstudiotips";
  function handleTelegramButtonClick() {
    window.open(`${username}`, '_blank');
  }
  // Верстка
  const t = useTranslations("Feedback");
  const tp = useTranslations("Price");
  const tb = useTranslations("Button");

  return (
    // Оболчка мантина
    <MantineProvider>
      <div className={styles.feedback} id="feedback">
        <div className={styles.feedback_left}>
          <h2 className={styles.feedback_left_top}>{t("title")}</h2>
          <p className={styles.feedback_left_description}>
            {t("description1")}
          </p>
          <div className={`${styles.feedback_left_bottom} lg:hidden`}>
            <p>{t("description2")}</p>
            <div className={styles.feedback_left_bottom_info}>
              <Image
                width={40}
                height={40}
                src="/images/feedback/feedback1.svg"
                alt="icon"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <Link href="tel:+79968085818">+7 996 808 58 18</Link>
              <Link href="mailto:info@webstudio-tips.ru">
                info@webstudio-tips.ru
              </Link>
            </div>
          </div>
          <div className={`${styles.feedback_left_buttons} flex lg:hidden`}>
            <button className={styles.tg} onClick={handleTelegramButtonClick}>
              <Image
                src="/images/feedback/tg.svg"
                width={0}
                height={0}
                alt="tg"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <p>Telegram</p>
            </button>
            {/* <button className={styles.vk}>
              <Image
                src="/images/feedback/vk.svg"
                width={28}
                height={23}
                alt="vk"
                style={{
                  width: "28px",
                  height: "23px",
                }}
              />
              <p>Вконтакте</p>
            </button> */}
            <button
              className={styles.whatsApp}
              onClick={handleWhatsAppButtonClick}
            >
              <Image
                src="/images/feedback/whatsApp.svg"
                width={36}
                height={35}
                alt="whatsApp"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <p>WhatsApp</p>
            </button>
          </div>
        </div>
        <form
          className={styles.feedback_right}
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <div className="flex gap-8 mb-16 flex-wrap lg:mb-8">
            <div className="flex flex-col w-1/2 lg:w-full">
              <p>{t("feedbackDescription1")}</p>
              <TextInput
                required
                {...form.getInputProps("name")}
                placeholder={t("feedbackPlaceholder1")}
                error={form.errors.name}
              />
            </div>
            <div className="flex flex-col w-1/2 lg:w-full">
              <p>{t("feedbackDescription2")}</p>
              <TextInput
                required
                {...form.getInputProps("phone")}
                placeholder="+79999999999"
                error={form.errors.phone}
              />
            </div>
          </div>
          <div className={styles.feedback_right_buttons}>
            <p className="mb-4">{t("feedbackDescription3")}</p>
            <div className={styles.buttons_wrapper}>
              {/* Кнопка "Сайт" */}
              <Button
                className={`w-[136px] sm:w-[77px] sm:order-1 ${
                  activeButton === "Сайт" ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                {t("feedbackButton3")}
              </Button>
              {/* Кнопка "Лендинг" */}
              <Button
                className={`w-[193px] sm:w-[103px] sm:order-3 ${
                  activeButton === "Лендинг" ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                {tp("title17")}
              </Button>
              {/* Кнопка "Интернет-магазин" */}
              <Button
                className={`w-[237px] sm:w-[176px] sm:order-2 ${
                  activeButton === "Интернет-магазин" ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                {tp("title18")}
              </Button>
              {/* Кнопка "Веб-приложение" */}
              <Button
                className={`w-[237px] sm:w-[168px] sm:order-4 ${
                  activeButton === "Веб-приложение" ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                {t("feedbackButton1")}
              </Button>
              {/* Кнопка "Другое" */}
              <Button
                className={`w-[237px] sm:w-[93px] sm:order-5 ${
                  activeButton === "Другое" ? styles.active : ""
                }`}
                onClick={(e) => {
                  handleOnClickRadio(e);
                }}
              >
                {t("feedbackButton2")}
              </Button>
            </div>
          </div>
          <div className={styles.example}>
            <p>{t("feedbackDescription4")}</p>
            <TextInput
              {...form.getInputProps("text")}
              placeholder={t("feedbackPlaceholder2")}
            />
          </div>
          <div className={styles.button}>
            <Button loading={isLoading} type="submit" className={styles.btn}>
              {tb("button")}
            </Button>
            <p>{t("privacyPolicy")}</p>
          </div>
        </form>
        <div className="hidden lg:block">
          <div className={styles.feedback_left_bottom}>
            <p>{t("description2")}</p>
            <div className={styles.feedback_left_bottom_info}>
              <div className="lg:w-5">
                <Image
                  width={40}
                  height={40}
                  src="/images/feedback/feedback1.svg"
                  alt="icon"
                  style={{
                    width: "40px",
                    height: "auto",
                  }}
                />
              </div>
              <Link href="tel:+79968085818">+7 996 808 58 18</Link>
              <Link href="mailto:info@webstudio-tips.ru">
                info@webstudio-tips.ru
              </Link>
            </div>
          </div>
          <div className={`${styles.feedback_left_buttons} flex`}>
            <button className={styles.tg} onClick={handleTelegramButtonClick}>
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/tg.svg"
                  width={0}
                  height={0}
                  alt="tg"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <p>Telegram</p>
            </button>
            {/* <button className={styles.vk}>
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/vk.svg"
                  width={28}
                  height={23}
                  alt="vk"
                  style={{
                    width: "28px",
                    height: "auto",
                  }}
                />
              </div>
              <p>Вконтакте</p>
            </button> */}
            <button
              className={styles.whatsApp}
              onClick={handleWhatsAppButtonClick}
            >
              <div className="lg:w-[25px]">
                <Image
                  src="/images/feedback/whatsApp.svg"
                  width={36}
                  height={35}
                  alt="whatsApp"
                  style={{
                    width: "36px",
                    height: "auto",
                  }}
                />
              </div>
              <p>WhatsApp</p>
            </button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
  // Конец верстки
}
