import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            <header></header>
            <main>{<Outlet />}</main>
            <footer></footer>
        </>
    );
};

export default PageLayout;
