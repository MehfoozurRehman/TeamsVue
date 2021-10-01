import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import DropDown from "./DropDown";

export default function Header() {
  const [isDropDownOpen1, setIsDropDownOpen1] = useState(false);
  const [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  const [isDropDownOpen3, setIsDropDownOpen3] = useState(false);
  const [isDropDownOpen4, setIsDropDownOpen4] = useState(false);
  const [isDropDownOpen5, setIsDropDownOpen5] = useState(false);
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <span>TEAMSVUE</span>
        </div>
        <nav className="header__nav">
          <a href="#" className="header__nav__link">
            Structures
            {isDropDownOpen1 ? <DropDown /> : null}
          </a>
          <a href="#" className="header__nav__link">
            Solutions
            {isDropDownOpen2 ? <DropDown /> : null}
          </a>
          <a href="#" className="header__nav__link">
            Integrations
            {isDropDownOpen3 ? <DropDown /> : null}
          </a>
          <a href="#" className="header__nav__link">
            Foundation
            {isDropDownOpen4 ? <DropDown /> : null}
          </a>
          <a href="#" className="header__nav__link">
            Connect
            {isDropDownOpen5 ? <DropDown /> : null}
          </a>
        </nav>
      </div>
    </div>
  );
}
