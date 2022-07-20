import React from "react";

import MyStyles from "./menuItem.module.css";

export default function MenuItem({ label, pathname, closeMenu }) {
  return (
    <a href={pathname} className={MyStyles.menuItem} onClick={closeMenu}>
      {label}
    </a>
  );
}
