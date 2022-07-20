import React, { useState } from "react";
import clsx from "clsx";

import MyStyles from "./subMenu.module.css";
import MenuItem from "../MenuItem";

export default function SubMenu({ label, items, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={MyStyles.subMenu}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={MyStyles.label}>{label}</div>
      {isOpen && (
        <div className={clsx(MyStyles.dropAside, MyStyles.dropAsideLtr)}>
          {items.map((item, i) => {
            if (item.children) {
              return (
                <SubMenu
                  key={i}
                  label={item.label}
                  items={item.children}
                  closeMenu={closeMenu}
                />
              );
            } else {
              return (
                <MenuItem
                  key={i}
                  label={item.label}
                  pathname={item.pathname}
                  closeMenu={closeMenu}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
