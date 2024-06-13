import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {contents} from "./HowConstants.js";
import "./HowSection.css";

export default function HowSection() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.to(".steps_line_inner", {
            transform: "translateY(50%)",
            scrollTrigger: {
                trigger: ".steps_line",
                scroller: "body",
                start: "top 20%",
                end: "bottom 20%",
                scrub: .1
            }
        })
    });

    return (
        <section className="how-section d-flex flex-column align-items-center">
            <span className="rounded-pill p-2 px-4">How it works</span>
            <h1 className="fs-1 fw-bolder pb-5 px-2 px-md-0 text-center">Onboard talent blazing fast</h1>
            <div className="steps container d-flex gap-5 justify-content-center">
                <div className="box d-none d-md-block">
                    {contents.map((content, i) => (
                        <div key={i} className="card d-flex align-items-center justify-content-center">
                            <h1 className="number rounded-circle p-2 d-flex align-items-center justify-content-center">{content.num}</h1>
                        </div>
                    ))}
                </div>
                <div className="steps_line" >
                    <div className="steps_line_inner h-100"></div>
                </div>
                <div className="box">
                    {contents.map((content, i) => (
                        <div key={i} className="card d-flex justify-content-center">
                            <h1 className="fw-bolder fs-2">{content.heading}</h1>
                            <p className="fs-6">{content.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center container py-3 mb-5">
                <h1 className="fw-bolder fs-2">Turn your ideas into actual products</h1>
                <p>Our experts would complete your project as per the timelines. You'll have a dedicated project manager for managing your project</p>
            </div>
        </section>
    )
}