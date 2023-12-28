
import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import Product from "./Pages/Product/Product.tsx"
import Contacts from "./Pages/Contacts/Contacts.tsx";
import Item from "./Components/Item.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/products",
        element:<Product/>,
        children:[
            {
                path: ":id",
                element:<Item/>
            },
        ]
    },
    {
        path: "/contacts",
        element:<Contacts/>
    }
]);

export default router;