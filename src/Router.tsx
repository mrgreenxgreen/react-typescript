
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "./App.tsx";
import About from "./Pages/About.tsx"
import Contacts from "./Pages/Contacts.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/about",
        element:<About/>
    },
    {
        path: "/contacts",
        element:<Contacts/>
    }
]);

export default router;