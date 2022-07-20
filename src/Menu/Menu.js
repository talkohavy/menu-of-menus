import React, { useState } from "react";

import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import MyStyles from "./menu.module.css";

export default function Menu({ label, items }) {
  const [timerID, setTimerID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={MyStyles.menuOpener}
      onMouseEnter={() => {
        setIsOpen(true);
        clearTimeout(timerID);
      }}
      onMouseLeave={() => {
        setTimerID(
          setTimeout(() => {
            setIsOpen(false);
          }, 200)
        );
      }}
    >
      <a href="/#" className={MyStyles.label}>
        {label}
      </a>
      {isOpen && items && (
        <div className={MyStyles.dropdown}>
          {items.map((item, i) => {
            if (item.children) {
              return (
                <SubMenu
                  key={i}
                  label={item.label}
                  items={item.children}
                  closeMenu={() => setIsOpen(false)}
                />
              );
            } else {
              return (
                <MenuItem
                  key={i}
                  label={item.label}
                  pathname={item.pathname}
                  closeMenu={() => setIsOpen(false)}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
