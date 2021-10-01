import React from "react";
import onClickOutside from "react-onclickoutside";

function DropDown() {
  DropDown.handleClickOutside = () => console.log("hello");
  return (
    <div className="header__nav__link__dropdown">
      <a href="#" className="header__nav__link__dropdown__linkl">
        What is TeamsVue
      </a>
      <a href="#" className="header__nav__link__dropdown__linkl">
        TeamsVue’s Impact
      </a>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig);
