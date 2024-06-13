import Logo from "../Logo/Logo.jsx";
import "./Footer.css";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import {footerNavs} from "../../utils/constants.js";
import Navigations from "../Navigation/Navigations.jsx"

export default function Footer() {
    return (
        <footer className="footer py-4 d-flex justify-content-evenly align-items-center">
            <div className="company py-3">
                <Logo />
                <p>STACKDOORS TECHNOLOGIES PVT. LTD.</p>
            </div>
            <div className="foot-navs d-flex justify-content-center align-items-center gap-3">
               {footerNavs.map((navs, idx)=>{
                return <Navigations link={navs.link} navText={navs.navText} key={idx} /> 
               })}
            </div>
            <div className="socials fs-4 d-flex align-items-center gap-2 py-3">
                <a href="https://www.instagram.com/z.a.i.d__k/?next=%2F"><IoLogoInstagram /></a>
                <a href="https://www.linkedin.com/in/mohammad-zaid-khan-928793253/"><IoLogoLinkedin /></a>
                
            </div>
        </footer>
    )
}