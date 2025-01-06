import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/DashboardLayout";
import Users from "../components/Users";
import Orders from "../components/Orders";
import AddProducts from "../components/AddProducts";
import EditProducts from "../components/EditProducts";
import ProductList from "../components/ProductLists";
import UserData from "../components/UserData";


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
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/:id',
                element: <UserData/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
            {
                path: '/products/add',
                element: <AddProducts/>
            },
            {
                path: '/products/edit/:id',
                element: <EditProducts/>
            },
            {
                path: '/products/list',
                element: <ProductList/>
            },
           
        ]
    }
])

export default router