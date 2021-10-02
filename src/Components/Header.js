import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import DropDown from "./DropDown";

export default function Header() {
  const dropdownlistItem1 = [
    { name: "What is TeamsVue", link: "What is TeamsVue" },
    { name: "TeamsVue’s Impact", link: "TeamsVue’s Impact" },
  ];
  const dropdownlistItem2 = [
    { name: "For People Leaders", link: "For People Leaders" },
    { name: "For Procurement Leaders", link: "For Procurement Leaders" },
    { name: "For HR Leaders", link: "For HR Leaders" },
    { name: "For Project Managers", link: "For Project Managers" },
  ];
  const dropdownlistItem3 = [
    { name: "ITVue", link: "ITVue" },
    { name: "HRVue", link: "HRVue" },
    { name: "CultureVue", link: "CultureVue" },
    { name: "Small BusinessVue", link: "Small BusinessVue" },
  ];
  const dropdownlistItem4 = [
    { name: "HCM Systems", link: "HCM Systems" },
    { name: "Procurement Systems", link: "Procurement Systems" },
  ];
  const dropdownlistItem5 = [
    { name: "TeamsVue Ecosystem", link: "TeamsVue Ecosystem" },
    { name: "Our Vision", link: "Our Vision" },
    { name: "Our Motto", link: "Our Motto" },
    {
      name: "Our Community Responsibility",
      link: "Our Community Responsibility",
    },
    { name: "Our Research", link: "Our Research" },
    { name: "Our Outreach", link: "Our Outreach" },
    { name: "Our Founder", link: "Our Founder" },
  ];

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
          <a
            href="#"
            className="header__nav__link"
            onClick={() => {
              setIsDropDownOpen1(true);
            }}
          >
            Structures
            {isDropDownOpen1 ? (
              <DropDown
                dropdownlist={dropdownlistItem1}
                isOpen={setIsDropDownOpen1}
              />
            ) : null}
          </a>
          <a
            href="#"
            className="header__nav__link"
            onClick={() => {
              setIsDropDownOpen2(true);
            }}
          >
            Get Started
            {isDropDownOpen2 ? (
              <DropDown
                dropdownlist={dropdownlistItem2}
                isOpen={setIsDropDownOpen2}
              />
            ) : null}
          </a>
          <a
            href="#"
            className="header__nav__link"
            onClick={() => {
              setIsDropDownOpen3(true);
            }}
          >
            Solutions
            {isDropDownOpen3 ? (
              <DropDown
                dropdownlist={dropdownlistItem3}
                isOpen={setIsDropDownOpen3}
              />
            ) : null}
          </a>
          <a
            href="#"
            className="header__nav__link"
            onClick={() => {
              setIsDropDownOpen4(true);
            }}
          >
            Integrations
            {isDropDownOpen4 ? (
              <DropDown
                dropdownlist={dropdownlistItem4}
                isOpen={setIsDropDownOpen4}
              />
            ) : null}
          </a>
          <a
            href="#"
            className="header__nav__link"
            onClick={() => {
              setIsDropDownOpen5(true);
            }}
          >
            Foundation
            {isDropDownOpen5 ? (
              <DropDown
                dropdownlist={dropdownlistItem5}
                isOpen={setIsDropDownOpen5}
              />
            ) : null}
          </a>
          <a href="#" className="header__nav__link">
            Connect
          </a>
        </nav>
      </div>
    </div>
  );
}
