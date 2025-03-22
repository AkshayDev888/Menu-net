import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMenus, createMenu } from "../api";

function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const response = await getMenus();
    setMenus(response.data);
  };

  const addMenu = async () => {
    const newMenu = { name: "Snacks", description: "Tasty snacks" };
    await createMenu(newMenu);
    fetchMenus();
  };

  return (
    <div className="container">
      <h1>Menu</h1>
      <button onClick={addMenu}>Add Menu</button>
      <ul>
        {menus.map((menu) => (
          <li key={menu._id}>
            <Link to={`/menu/${menu._id}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
