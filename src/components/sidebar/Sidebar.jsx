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
                    <NavLink to="/" className={styles.active}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <img src="./Transactions.svg" alt="Transactions.png" />{" "}
                    <NavLink to="/transactions" className={styles.active}>
                        Transactions
                    </NavLink>
                </li>
                <li>
                    <img src="./UserList.svg" alt="Transactions.png" className="icon" />{" "}
                    <NavLink to="/usermanagement" className={styles.active}>
                        User List
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
