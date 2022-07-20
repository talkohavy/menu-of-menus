import React from "react";
import Menu from "../Menu";
import MyStyles from "./navBar.module.css";

export default function NavBar({ menuLinks }) {
  return (
    <div className={MyStyles.navbar}>
      {menuLinks.map((menu, i) => (
        <Menu key={i} label={menu.label} items={menu.children} />
      ))}
    </div>
  );
}
