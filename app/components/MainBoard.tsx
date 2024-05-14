"use client";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { PlayerList } from "./PlayerList";
import { DiscardPile } from "./DiscardPile";
import { Pile } from "./Pile";
import "./superCss.css";

export interface CardSetProps {
  id: string;
  data: CardDataProps[];
}

export interface CardDataProps {
  id: string;
  data: string;
}

export const getCards = (amount = 7): CardSetProps => {
  const item = {
    id: v4(),
    data: [...Array(amount)].map(() => ({ id: v4(), data: `Widget-${v4()}` })),
  };
  return item;
};

export const MainBoard = () => {
  const [dataList, setDataList] = useState<CardSetProps[]>([]);
  const [pileData, setPileData] = useState<CardSetProps>();
  const [discardPile, setDiscardPile] = useState<CardSetProps>({
    id: v4(),
    data: [],
  });

  useEffect(() => {
    setDataList(() => [getCards()]);
    setPileData(getCards(10));
  }, []);

  const handleOnDrop = (e: React.DragEvent) => {
    // Get drag params
    const id = e.dataTransfer.getData("id") as string;
    const player_id = e.dataTransfer.getData("player_id") as string;

    // add data to discard pile
    setDiscardPile((prev) => {
      const data = dataList
        .filter((m) => m.id === player_id)[0]
        .data.filter((m) => m.id === id)[0];
      const prevData = prev?.data || [];
      return { ...prev, data: [...prevData, data] } as CardSetProps;
    });

    // remove data from player
    setDataList((prev) =>
      [...prev].map((m) =>
        m.id === player_id
          ? { ...m, data: m.data.filter((n) => n.id !== id) }
          : m
      )
    );
  };

  const onClickDiscardPile = () => {
    if (
      discardPile == null ||
      discardPile.data == null ||
      discardPile.data.length <= 1
    )
      return;

    //Move most data to pile
    setPileData((prev) => {
      const data = prev?.data || [];
      const discardedData = discardPile.data;
      return {
        ...prev,
        data: [...data, ...discardedData.slice(1, discardedData.length)],
      } as CardSetProps;
    });

    //clear discard pile
    setDiscardPile(
      (prev) => ({ ...prev, data: [prev?.data[0]] } as CardSetProps)
    );
  };

  const onClickPlayer = (id: string) => {
    if (id == null || id === "") return;

    if (pileData == null || pileData.data == null || pileData.data.length === 0)
      return;

    // Adding Pile data to player
    setDataList((prev) =>
      [...prev].map((m) => {
        if (m.id === id) {
          return { ...m, data: [...m.data, pileData.data[0]] };
        }
        return m;
      })
    );

    //Removing data from pile
    setPileData((prev) => {
      const data = prev?.data || [];
      return {
        ...prev,
        data: [...data.slice(1, data.length)],
      } as CardSetProps;
    });
  };

  return (
    <div className="main-board">
      <div className="h1">Main Board</div>
      <PlayerList onClick={onClickPlayer} dataList={dataList} />
      {discardPile && (
        <DiscardPile
          discardPile={discardPile}
          handleOnDrop={handleOnDrop}
          onClickPile={onClickDiscardPile}
        />
      )}
      {pileData && <Pile pileData={pileData} />}
    </div>
  );
};
