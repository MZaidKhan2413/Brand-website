import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error";

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
                path: "*",
                element: <Error />
            }
        ]
    },
])