import "./About.css";
import Navigations from "../Navigation/Navigations.jsx";
import AboutContent from "./AboutContent.jsx";
import { aboutNavs, aboutContent } from "./aboutConstants.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const About = () => {
    const loc = useLocation();
    useEffect(()=>{
        if (loc.hash === "#mission") {
            document.getElementById("mission").scrollIntoView({ behavior: "smooth" });
        } else if (loc.hash === "#vision") {
            document.getElementById("vision").scrollIntoView({ behavior: "smooth" });
        } else if (loc.hash === "#team") { 
            document.getElementById("team").scrollIntoView({ behavior: "smooth" });
        } else if (loc.hash === "#contact") {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [loc])

    useGSAP(()=>{
      gsap.from(".container", {
        opacity: 0,
        duration: 1.2,
      })
    })

  return (
    <section className="about">
        <div className="container d-flex flex-column">
            <h1 className="text-center fw-bold py-3">About StackDoors</h1>
            <p className="text-center py-2 opacity-50 fs-6 mb-5">
              Welcome to StackDoors! We are a company dedicated to providing high-quality, innovative wall solutions for both residential and commercial spaces. Our mission is to transform spaces with our cutting-edge wall designs, offering a perfect blend of aesthetics and functionality.
            </p>

            <div className="about-navs w-50 py-2 px-2 rounded-pill d-flex justify-content-evenly mb-3">
                {
                    aboutNavs.map((nav, index) => (
                        <Navigations link={nav.link} navText={nav.name} styling="p-2 about-navs-inner rounded-pill" key={index} />
                    ))
                }
            </div>
            <div className="">
              {
                aboutContent.map((content, index) => (
                  <AboutContent key={index} id={content.id} title={content.title} content={content.content} keyPoint={content.keyPoint} />
                ))
              }
            </div>
        </div>
    </section>
  );
};

export default About;
