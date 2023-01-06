import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Preço - R$ {price}</p>
        <button onClick={() => handleClick(item)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
