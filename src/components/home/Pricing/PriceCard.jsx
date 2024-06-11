import { IoCheckmarkCircleOutline } from "react-icons/io5";
export default function PriceCard({info}) {
    return (
        <div className="p-card col-lg-3 col-md-6 col-10 p-4 d-flex flex-column justify-content-around">
            <span className="head-text rounded-pill p-2 px-4">{info.headText}</span>
            <h5 className="py-2 m-0"><strong className="fw-bolder fs-1 me-2">{info.price}</strong> {info.priceInfo}</h5>
            <h5 className="fw-bold opacity-75">{info.description}</h5>
            <hr className="my-3"/>
            <div className="infos d-flex flex-column gap-3 p-2">
                {info.perkList.map((perk, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2 opacity-75"><IoCheckmarkCircleOutline className="fw-bolder fs-4" /> {perk}</li>
                ))}
            </div>
            <button className="btn btn-light">{info.buttonText}</button>
        </div>
    )
}