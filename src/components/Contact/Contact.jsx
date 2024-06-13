import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
import { useEffect } from "react";
export default function Contact() {
    useEffect(()=>{
        window.scrollTo(0,0)
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    useGSAP(()=> {
        var timeline = gsap.timeline();
        timeline.from("h1",{
            opacity: 0,
            duration: .5,
            y: -20,
        })
        timeline.from(".contact-inputs",{
            opacity: 0,
            y: 20,
            stagger: 0.2
        })
        timeline.from(".form-btn",{
            opacity: 0,
            y: 20,
        })
    })

    return(
        <div className="contact d-flex flex-column align-items-center justify-content-center gap-5">
            <h1 className="fw-bolder">Contact Us</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3 w-100 mb-5">
                <input type="text" placeholder="Name" required className="contact-inputs"/>
                <input type="email" placeholder="Email" required className="contact-inputs"/>
                <textarea placeholder="Message" required className="contact-inputs"></textarea>
                <button type="submit" className="form-btn">Submit</button>
            </form>
        </div>
    )
}