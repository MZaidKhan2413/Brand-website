import { useTypewriter, Cursor } from "react-simple-typewriter";
import ActionButton from "../ActionButton";

export default function Hero() {
    const [text] = useTypewriter({
        words: ["web pages", "websites", "apps", "e-commerce solutions", "UI/UX designs"],
        loop: {},
        delaySpeed: 550,
    });
  return (
    <section className="hero h-100 w-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-bolder pb-2">Hire World Class Talent</h1>
      <h1 className="fw-bolder">to build your <span>{text}</span><Cursor /></h1>
      <p className="py-3">
        Discover handpicked talent for exceptional tech solutions
      </p>
      <div className="d-flex gap-4 py-2">
        <ActionButton link={""} innerText={"See Plans"} />
        <ActionButton
          link={""}
          innerText={"Schedule a call"}
          btnColor="btn-clr-black"
        />
      </div>
    </section>
  );
}
