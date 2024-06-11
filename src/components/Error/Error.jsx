import ActionButton from "../ActionButton/ActionButton.jsx"
export default function Error() {
    return (
        <div className="error-page d-flex flex-column align-items-center justify-content-center">
            <div className="p-4">
                <h1 className="fw-bolder">404 :(</h1>
                <h2>Oops Page Not Found!</h2>
            </div>
            <ActionButton link={"/"} innerText={"Go to Home"}/>
        </div>
    )
}