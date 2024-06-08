export default function Navigations({link, navText, styling=""}) {
    return (
        <li className={styling}><a href={link}>{navText}</a></li>
    )
}