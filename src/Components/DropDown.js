import React from "react";
import onClickOutside from "react-onclickoutside";

function DropDown({ dropdownlist, isOpen }) {
  DropDown.handleClickOutside = () => isOpen(false);
  return (
    <div className="header__nav__link__dropdown">
      {dropdownlist.map((dropdownlistItem) => {
        return (
          <a
            href={dropdownlistItem.link}
            className="header__nav__link__dropdown__link"
          >
            {dropdownlistItem.name}
          </a>
        );
      })}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig);
