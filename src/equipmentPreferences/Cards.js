import React, { useState } from "react";
import Card from "./Card";
import update from "immutability-helper";
const style = {
  width: 400
};
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Desert Eagle"
      },
      {
        id: 2,
        text: "Five-SeveN / CZ-75 / Tec-9"
      },
      {
        id: 3,
        text: "p250"
      }
    ]);
    const moveCard = (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    };
    return (
      <div style={style}>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      </div>
    );
  }
};
export default Container;
