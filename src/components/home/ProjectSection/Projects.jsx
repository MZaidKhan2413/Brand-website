import ActionButton from "../../ActionButton/ActionButton.jsx"
export default function Projects({src, link}) {
    return (
        <div className="projectImg">
            <div className="img-overlay w-100 h-100 d-flex align-items-center justify-content-center">
                <ActionButton link={link} innerText={"View Project"} />
            </div>
            <img src={src} alt="project" className="w-100" />
        </div>
    )
}