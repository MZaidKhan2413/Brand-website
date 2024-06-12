import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero/Hero.jsx";
import ProjectSection from "./ProjectSection/ProjectSection.jsx";
import HowSection from "./HowSection/HowSection.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Community from "./Community/Community.jsx";

export default function Home() {
    const location = useLocation();

    useEffect(()=>{
        if(location.hash === "") {
            document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        }
        if(location.hash === "#pricing"){
            document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
        }
        else if(location.hash === "#community"){
            document.getElementById("community").scrollIntoView({ behavior: "smooth" });
        }
     }, [location.hash]);
     
    return (
        <div className="home">
            <Hero />
            <ProjectSection />
            <HowSection />
            <Pricing />
            <Community />
        </div>
    )
}