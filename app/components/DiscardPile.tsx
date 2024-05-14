import { CardSetProps } from "./MainBoard";

export interface DiscardPileProps {
  handleOnDrop: (e: React.DragEvent) => void;
  onClickPile: () => void;
  discardPile: CardSetProps;
}
export const DiscardPile = ({
  handleOnDrop,
  onClickPile,
  discardPile,
}: DiscardPileProps) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {discardPile.data.map((widget, index) => (
          <div className="dropped-widget" key={widget.id}>
            {widget.data}
          </div>
        ))}
        <button className="btn" onClick={onClickPile} name="reshuffle">
          Add to Pile
        </button>
      </div>
    </>
  );
};
