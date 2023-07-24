import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import {NavLink, useLocation} from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  
  const isActive = (pos, location) => {
    return pos.url == location.pathname;
  }

  const activo = ({isActive}) => {
    return isActive ? styleNav.active : styleNav.disable;
  }

  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
      <NavLink to="/">
        <li>
          <img src={logoHenry} alt="logo-henry" />
        </li>
      </NavLink>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
        <NavLink to="/shipping">
          <li>
            <span>Navieras</span>
          </li>
        </NavLink>
        <NavLink to="/discounts"
        className={activo}>
          <li>
            <span>Promociones</span>
          </li>
        </NavLink>
        </div>
      </ul>
    </div>
  );
}
