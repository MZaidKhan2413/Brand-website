import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutContent({id, title, content, keyPoint,}) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=> {
    gsap.from(`#${id}, #key${id}`, {
      x: -50,
      duration: 1,
      ease: "elastic.out(.5, 1)",
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "body",
        start: "top 90%",
        toggleActions: "restart pause resume reset",
      },
    });
  })
  return (
    <div className="row">
      <div className="text-md-start text-center col-12 col-md-7 row gap-2">
        <h2 id={id} className="col-12">{title}</h2>
        <p className="paras col-12">{content}</p>
      </div>
      <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
        <h3 id={`key${id}`} className="about-key-point fw-bolder opacity-75 text-center" style={{color: keyPoint.color}}>{keyPoint.text}</h3>
      </div>
    </div>
  );
}
