import { useTypewriter, Cursor } from "react-simple-typewriter";
import ActionButton from "../ActionButton/ActionButton";

export default function Hero() {
    const [text] = useTypewriter({
        words: ["web pages", "websites", "apps", "e-commerce solutions", "UI/UX designs"],
        loop: {},
        delaySpeed: 550,
    });
  return (
    <section className="hero w-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-bolder pb-2 text-center px-md-0 px-4">Hire World Class Talent</h1>
      <h1 className="fw-bolder text-center px-md-0 px-4">to build your <span>{text}</span><Cursor /></h1>
      <p className="py-3 text-center px-md-0 px-4">
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
