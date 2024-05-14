import { CardProps, Card } from "./Card";
import { getCardData } from "./getCardData";

export const CardList = () => {
  const superList = getCardData();

  return (
    <div className="grid grid-cols-12 gap-2">
      {superList.map((obj: CardProps, i) => (
        <Card {...obj} key={i} />
      ))}
    </div>
  );
};
