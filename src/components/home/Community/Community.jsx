import "./Community.css";
import ActionButton from "../../ActionButton/ActionButton";
export default function Community() {
    return (
        <section className="community d-flex flex-column align-items-center pb-3 px-5" id="community">
            <span className="head-text rounded-pill p-2 px-4">Community</span>
            <div className="community-box h-75 w-75 d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className="fw-bold text-center">Want to <span>jam</span> with us?</h1>
                <p className="text-center opacity-75">Be part of our vibrant WhatsApp community where talented minds <br /> connect, share opportunities, and collaborate on exciting projects.</p>
                <ActionButton innerText={"Join Now"} />
                <div className="community-member h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                    <span>Alex</span>
                    <span>Maria</span>
                    <span>David</span>
                    <span>Sarah</span>
                    <span>John</span>
                    <span>Emily</span>
                    <span>Michael</span>
                    <span>Jessica</span>
                </div>
            </div>
        </section>
    )
}