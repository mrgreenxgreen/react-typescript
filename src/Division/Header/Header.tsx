import Head from "./Header.module.scss"
import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"


export default function Header():React.ReactElement{



    return (
        <>
            <div className={Head.header}>
                <NavLink to={"/"}>
                    <div>Brand Name</div>
                </NavLink>
                <div className={Head.menu}>
                    <NavLink to={"/products"}
                             className={({ isActive }: { isActive: boolean }) => (isActive ? "activegig" : "") as string}
                        // className={Head.active}
                             >

                        <div> Products</div>
                    </NavLink>
                    <NavLink to={"/contacts"}><div> Contacts </div></NavLink>
                </div>
            </div>

        </>
    )
}