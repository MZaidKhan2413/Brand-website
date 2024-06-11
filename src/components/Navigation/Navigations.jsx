import { NavLink } from "react-router-dom";
import "./Navigation.css"
export default function Navigations({ link, navText, styling = "" }) {
  return (
    <li className={styling}>
      <NavLink
        className={({ isActive }) =>
          `${isActive && "fw-bolder link-underline"}`
        }
        to={link}
      >
        {navText}
      </NavLink>
    </li>
  );
}
