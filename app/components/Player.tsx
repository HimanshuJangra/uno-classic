import { CardDataProps } from "./MainBoard";

export interface PlayerProps {
  onClick: (id: string) => void;
  data: CardDataProps[];
  player_id: string;
}
export const Player = ({ onClick, data, player_id }: PlayerProps) => {
  const handleOnDrag = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("player_id", player_id);
  };
  return (
    <div className="widgets">
      <div>Player {player_id}</div>
      {data.map((m, i) => (
        <div
          className="widget"
          draggable
          key={i}
          onDragStart={(e) => handleOnDrag(e, m.id)}
        >
          {m.data}
        </div>
      ))}
      <button
        className="btn"
        onClick={() => onClick(player_id)}
        name="player1"
        disabled={data.length === 0}
      >
        Add from Pile
      </button>
    </div>
  );
};
