/** @format */

import React from "react";
import logo from "../../assets/pulse.svg";
import dog from "../../assets/walking-the-dog.svg";
import cat from "../../assets/cat.svg";
import othersAnimals from "../../assets/koala.svg";
import contact from "../../assets/phone-call (1).svg";
import {
  NavbarList,
  NavbarWrapper,
  LogoElement,
  NavbarLink,
} from "./NavbarStyles";
import NavElement from "./NavElement";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <LogoElement>
          <NavbarLink to={routes.home}>
            <img src={logo} alt="logo" />
            <span>VetMed</span>
          </NavbarLink>
        </LogoElement>
        <NavElement img={dog} name="Dog" direction={routes.dog} />
        <NavElement img={cat} name="Cat" direction={routes.cat} />
        <NavElement
          img={othersAnimals}
          name="Poradnia ogólna"
          direction={routes.genralClinic}
        />
        <NavElement
          img={contact}
          name="Kontakt"
          direction={routes.contact}
          last
        />
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
