interface IButton {
  text: string;
  id: number;
}

interface ICards {
  title: string;
  info: string;
  id: number;
  imageSrc: string;
  href: string;
  className: string;
}

interface ICardsFilter {
  buttons: IButton[];
  cards: ICards[];
}
