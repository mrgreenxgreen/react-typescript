import Head from "./Header.module.css"
import React from "react";
import {Link} from "react-router-dom";


export default function Header():React.ReactElement{

    return(
        <>
            <div className={Head.header}>
                <Link to={"/"}>
                    <div>Brand Name</div>
                </Link>
                <div className={Head.menu}>
                    <Link to={"/about"}><div> About</div></Link>
                    <Link to={"/contacts"}><div> Contacts </div></Link>
                </div>
            </div>

        </>
    )
}