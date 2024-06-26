"use client";

import * as React from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu";

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-menu-container">
      <div className="menuicon" onClick={toggleMenu}>
        <UseAnimations animation={menu} size={25} strokeColor="#808080" />
      </div>

      {isMenuOpen && (
        <div className="menu-dropdown" onClick={closeMenu}>
          <div className="menudropdown-item">
            <a href="/pages/about">About</a>
          </div>
          <div className="menudropdown-item">
            <a href="/pages/works">Works</a>
          </div>
          <div className="menudropdown-item">
            <a href="/pages/contact">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
