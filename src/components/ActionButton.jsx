import "../assets/css/ActionButton.css";
import { IoChevronForward } from "react-icons/io5";

export default function ActionButton({ link, innerText, btnColor="btn-clr-white" }) {
  return (
    <a href={link}>
      <button className={`actionBtn btn btn-light rounded-pill px-3 d-flex align-items-center gap-1 ${btnColor}`}>
        {innerText}
        <IoChevronForward />
      </button>
    </a>
  );
}
