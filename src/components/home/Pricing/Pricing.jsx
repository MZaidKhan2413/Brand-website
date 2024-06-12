import "./Pricing.css";
import PriceCard from "./PriceCard";
import {priceInfos} from "./priceInfos"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Pricing() {
    useGSAP(()=>{
        gsap.from(".p-card", {
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.4)",
            scrollTrigger: {
                trigger: ".pricing",
                scroller: "body",
                start: "top 30%",
                end: "bottom 20%",
                ease: "power2.inOut",
                toggleActions: "restart pause resume reset",
            }
        })
    })
  return (
    <section className="pricing d-flex flex-column align-items-center pb-3">
      <span className="head-text rounded-pill p-2 px-4">Pricing</span>
      <div className="price-cards w-100 row justify-content-center gap-4">
        {priceInfos.map((priceInfo, index) => (
            <PriceCard key={index} info={priceInfo} />
          )
        )}
      </div>
    </section>
  );
}
