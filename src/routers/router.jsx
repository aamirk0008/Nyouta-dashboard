import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/DashboardLayout";
import Products from "../components/Products";
import Users from "../components/Users";
import Orders from "../components/Orders";
import AddProducts from "../components/AddProducts";
import EditProducts from "../components/EditProducts";
import ProductList from "../components/ProductLists";
import Login from "../components/Login"

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
            {
                path: '/admin/login',
                element: <Login/>
            }
        ]
    }
])

export default router