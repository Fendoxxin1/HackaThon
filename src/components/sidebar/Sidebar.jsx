import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.pageName}>
                <img src="./sidebarLogo.png" alt="" />
                <div className={styles.sidebarDesc}>
                    <p className={styles.pageTitle}>Fiscal Atelier</p>
                    <p className={styles.pageDesc}>Wealth Management</p>
                </div>
            </div>

            <ul>
                <li className={`${styles.active}`}>
                    <img src="./sidebarDashboard.png" alt="sidebarDashboard.png" className="icon" />{" "}
                    <a className={`${styles.active}`} href="/">
                        Dashboard
                    </a>
                </li>
                <li>
                    <img src="./Transactions.svg" alt="Transactions.png" />{" "}
                    <NavLink to="/transactions">Transactions</NavLink>
                </li>
                <li>
                    <img src="./UserList.svg" alt="Transactions.png" className="icon" />{" "}
                    <NavLink to="/usermanagement">User List</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
