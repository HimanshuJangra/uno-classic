import { CardSetProps } from "./MainBoard";
export interface PileProps {
  pileData: CardSetProps;
}
export const Pile = ({ pileData }: PileProps) => {
  return (
    <div className="pile">
      <div>Pile</div>
      {pileData.data.map((m) => (
        <div className="widget" key={m.id}>
          {m.data}
        </div>
      ))}
    </div>
  );
};
