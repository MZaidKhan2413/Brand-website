import Navigations from "../Navigation/Navigations";
import ActionButton from "../ActionButton/ActionButton";
import {navigations} from "../../utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo/Logo";
import "./Navbar.css";
export default function Navbar() {
    return(
        <nav className="Navbar d-flex align-items-center justify-content-sm-center justify-content-between gap-5">
            <Logo />
            <div className="navigations d-none d-md-flex align-items-center gap-5">
                {navigations.map((nav, idx) => <Navigations link={nav.link} navText={nav.navText} key={idx} />)}
            </div>
            <div className="d-none d-md-flex">
                <ActionButton link={"/pricing"} innerText={"Get Started"}/>
            </div>

            <div className="dropdown d-block d-md-none">
              <span className="fs-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <GiHamburgerMenu />
              </span>
              <ul className="dropdown-menu text-center">
                {navigations.map((nav, idx) => <Navigations link={nav.link} navText={nav.navText} styling="py-1" key={idx} />)}
              </ul>
            </div>
        </nav>
    )
}