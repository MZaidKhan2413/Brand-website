import { Link } from "react-router-dom";
import "./Navigation.css"
export default function Navigations({ link, navText, styling = "" }) {
  return (
    <li className={styling}>
      <Link
        to={link}
      >
        {navText}
      </Link>
    </li>
  );
}
