import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>{<Outlet />}</main>
            <footer></footer>
        </>
    );
};

export default PageLayout;
