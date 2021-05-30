/** @format */

import React from "react";
import { NavbarElement, NavbarLink } from "./NavbarStyles";

const NavElement = ({ img, name, direction, last }) => {
  return (
    <NavbarElement last={last}>
      <NavbarLink to={direction}>
        <img src={img} alt={name} />
        <span>{name}</span>
      </NavbarLink>
    </NavbarElement>
  );
};

export default NavElement;
