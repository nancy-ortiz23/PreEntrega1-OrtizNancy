import React from 'react';

const MenuDetail = ({ menu }) => {
  return (
    <div className="menu-detail">
      <h3>{menu.name}</h3>
      <p>{menu.description}</p>
      <img src={menu.image} alt={menu.name} />
    </div>
  );
};

export default MenuDetail;