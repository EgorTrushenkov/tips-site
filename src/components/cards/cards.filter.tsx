"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import ButtonComponent from "../button/Button";
import styles from "../../styles/cards.module.scss";
import Card from "./card/card";

const CardsFilter: React.FC<ICardsFilter> = ({ buttons, cards }) => {
  const t = useTranslations("Cards");

  const localActive = useLocale();
  const [filter, setFilter] = useState("");
  const [activeButton, setActiveButton] = useState(
    `${localActive === "ru" ? "Все" : "All"}`
  );

  const handleButtonClick = (filterValue: string) => {
    if (filterValue === "Все") {
      setFilter("");
      setActiveButton("Все");
    } else if (filter === filterValue) {
      setFilter("");
      setActiveButton("");
    } else if (filterValue === "All") {
      setFilter("");
      setActiveButton("All");
    } else {
      setFilter(filterValue);
      setActiveButton(filterValue);
    }
  };

  return (
    <>
      {/* кнопочки */}
      <div
        className={styles.buttons_wrapper}
        style={{ scrollbarWidth: "none", overflowY: "hidden" }}
      >
        {buttons.map((button) => (
          <ButtonComponent
            key={button.id}
            className={`
            ${styles.cards_button} 
            ${activeButton === button.text ? styles.activeButton : ""}
          `}
            onClick={() => handleButtonClick(button.text)}
          >
            {button.text}
          </ButtonComponent>
        ))}
      </div>
      <div className={styles.cards_wrapper}>
        {cards
          .filter((card) => filter === "" || card.title.includes(filter))
          .map((card) => (
            <Card
              key={card.id}
              title={card.title}
              info={card.info}
              imageSrc={card.imageSrc}
              width={554}
              height={337}
              padding="px-[30px]"
              href={card.href}
              className={card.className}
            />
          ))}
      </div>
    </>
  );
};

export default CardsFilter;
