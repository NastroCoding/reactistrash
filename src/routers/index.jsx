import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";
import Login from "../pages/Login";
import Bus from "../pages/Bus";
import Order from "../pages/Order";
import Driver from "../pages/Driver"

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Login />
    },
    {
        path: "/home",
        element:<Home />
    },
    {
        path: "/driver",
        element:<Driver />
    },
    {
        path: "/order",
        element:<Order />
    },
    {
        path: "/bus",
        element:<Bus />
    },
])