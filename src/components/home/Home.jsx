import Hero from "./Hero/Hero.jsx";
import ProjectSection from "./ProjectSection/ProjectSection.jsx";
import HowSection from "./HowSection/HowSection.jsx";

export default function Home() {
    return (
        <div className="home h-100">
            <Hero />
            <ProjectSection />
            <HowSection />
        </div>
    )
}