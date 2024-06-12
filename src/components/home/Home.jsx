import Hero from "./Hero/Hero.jsx";
import ProjectSection from "./ProjectSection/ProjectSection.jsx";
import HowSection from "./HowSection/HowSection.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Community from "./Community/Community.jsx";

export default function Home() {
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