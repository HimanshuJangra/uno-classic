import { CardProps, cardColors, cardtypes } from "./Card";
import { v4 } from "uuid";

export const getCardData = () => {
  const superList: CardProps[] = [];
  const numbers = [...Array(10)].map((_, i) => i);
  const tempColors: cardColors[] = ["red", "yellow", "green", "blue"];

  [...numbers, ...numbers.slice(1, 10)].forEach((m) => {
    tempColors.forEach((n) => {
      superList.push({ name: `${m}`, color: n, id: v4(), type: "number" });
    });
  });
  const tempTypes: cardtypes[] = ["reverse", "skip", "+2"];
  tempTypes.forEach((m) => {
    tempColors.forEach((n) => {
      superList.push({ name: m, color: n, id: v4(), type: m });
      superList.push({ name: m, color: n, id: v4(), type: m });
    });
  });
  const tempWildCards: cardtypes[] = ["+4 wild", "wild"];
  [...Array(4)].forEach((m) => {
    tempWildCards.forEach((n) => {
      superList.push({ name: n, color: "black", id: v4(), type: n });
    });
  });

  return superList;
};
