import React from 'react';

const ItemDetail = ({ menu }) => {

  return (
    <div className="item-detail">
      <h2>{menu.title}</h2>
      <p>{menu.description}</p>
      <p>Precio: ${menu.price}</p>
      <img src={menu.pictureUrl} alt={menu.title} />
    </div>
  );
};

export default ItemDetail;