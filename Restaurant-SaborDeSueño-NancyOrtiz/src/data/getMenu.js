import React, { useState, useEffect } from 'react';
import MenuDetail from './MenuDetail'; // Importa el componente MenuDetail

const Menu = () => {
  const [menus, setMenus] = useState([]); // Estado para almacenar los menús

  useEffect(() => {
    const getMenus = new Promise((resolve, reject) => {
      // Simula un retraso de red con setTimeout
      setTimeout(() => {
        resolve([
          {
            id: "1",
            name: "Hamburguesa",
            description: "Hamburguesa con queso y papas",
            image: "https://ejemplo.com/hamburguesa.jpg"
          },
          {
            id: "2",
            name: "Pizza",
            description: "Pizza con pepperoni y queso fundido",
            image: "https://ejemplo.com/pizza.jpg"
          },
          {
            id: "3",
            name: "Ensalada César",
            description: "Ensalada con pollo, lechuga, crutones y aderezo César",
            image: "https://ejemplo.com/ensalada.jpg"
          }
        ]); // Resuelve la promesa con los menús
      }, 3000);
    });

    getMenus.then((menus) => {
      setMenus(menus); // Al resolver la promesa, actualiza el estado con los menús obtenidos
    });
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Menús</h2>
      {menus.map((menu) => (
        <MenuDetail key={menu.id} menu={menu} /> // Renderiza el componente MenuDetail para cada menú
      ))}
    </div>
  );
};

export default Menu;