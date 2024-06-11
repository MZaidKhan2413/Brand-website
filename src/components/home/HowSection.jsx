import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

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
        <div className="how-section d-flex flex-column align-items-center">
            <span className="rounded-pill p-2 px-4">How it works</span>
            <h1 className="fs-1 fw-bolder pb-5">Onboard talent blazing fast</h1>
            <div className="steps d-flex gap-5 justify-content-center">
                <div className="box">
                    <div className="card d-flex align-items-center justify-content-center">
                        <h1 className="number rounded-circle bg-primary p-2 d-flex align-items-center justify-content-center">1</h1>
                    </div>
                </div>
                <div className="steps_line" >
                    <div className="steps_line_inner h-100"></div>
                </div>
                <div className="box">
                    <div className="card d-flex align-items-center justify-content-center">
                        <h1 className="fw-bolder fs-2">Select your requirements</h1>
                        <p className="fs-6">Give a brief on your project in
                        less than 2 mins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}