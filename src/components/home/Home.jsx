import "../../assets/css/Home.css";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import HowSection from "./HowSection";

export default function Home() {
    return (
        <div className="home h-100">
            <Hero />
            <ProjectSection />
            <HowSection />
        </div>
    )
}