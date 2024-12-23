import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/DashboardLayout";
import Products from "../components/Products";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <DashboardLayout/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    }
])

export default router