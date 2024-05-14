import { CardSetProps } from "./MainBoard";
import { Player } from "./Player";

export interface PlayerListProps {
  onClick: (id: string) => void;
  dataList: CardSetProps[];
}
export const PlayerList = ({ onClick, dataList }: PlayerListProps) => {
  return (
    <>
      {dataList.map(({ id, data }) => (
        <Player onClick={onClick} data={data} key={id} player_id={id} />
      ))}
    </>
  );
};
