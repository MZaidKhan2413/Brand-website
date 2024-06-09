import Projects from "./Projects"
import { projects } from "../../utils/constants"

export default function ProjectSectiom() {
    return (
        <section className="projects w-100 d-flex flex-column align-items-center">
            <div className="projects-heading text-center px-md-0 px-4">
                <h2 className="fw-bolder">A taste of what our talent can do for you</h2>
                <p>This is worth a thousand words about us.</p>
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-5 w-100 px-md-0 px-4">
                {projects.map((project, idx)=>(
                    <Projects link={project.link} src={project.src} key={idx}/>
                ))}
            </div>
        </section>
    )
}