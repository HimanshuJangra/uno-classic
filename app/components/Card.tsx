export type cardColors = "red" | "yellow" | "green" | "blue" | "black";
export type cardtypes =
  | "wild"
  | "number"
  | "skip"
  | "+4 wild"
  | "reverse"
  | "+2";

export interface CardProps {
  name: string;
  color: cardColors;
  id?: string;
  type: cardtypes;
}
export const Card = ({ name, color, type }: CardProps) => (
  <span
    className="h-24 w-12 text-xs"
    style={{
      backgroundColor: color,
      color: "white",
      border: "1px solid black",
    }}
  >
    {name}
  </span>
);
