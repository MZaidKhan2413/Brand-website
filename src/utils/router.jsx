import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home.jsx";
import About from "../components/About/About.jsx";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    },
])