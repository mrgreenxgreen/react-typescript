import Header from "../../Division/Header/Header.tsx"
import {Outlet} from "react-router-dom";
export default function Product(){


    return(
        <>
            <Header/>
            <div>Products works!</div>
            <Outlet/>
        </>
    )
}