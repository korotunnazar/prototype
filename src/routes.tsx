import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Another from "./pages/another";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/another',
        element: <Another/>,
    },
])

export default router;