export default function HowSection() {
    function handleOnScroll(e) {
        console.log(e);
        console.log("hhh");
    }
    return (
        <div className="how-section d-flex flex-column align-items-center">
            <span className="rounded-pill p-2 px-4">How it works</span>
            <h1 className="fs-1 fw-bolder pb-5">Onboard talent blazing fast</h1>
            <div className="steps w-100" onScrollCapture={handleOnScroll}>
                <div className="step_line">
                    <div className="step_line_inner w-100"></div>
                </div>
            </div>
        </div>
    )
}