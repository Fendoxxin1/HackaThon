import React from 'react'
// import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.css"
// import { IoSearch } from 'react-icons/io5'

function Header() {
  return (
    <header>
        <div className={styles.search}>
            {/* <IoSearch  className={styles.searchIcon}/> */}
             <input type="search" placeholder='Search transactions, assets, or users...'/> 

        </div>

        <div className={styles.userProfile}>
            <div className={styles.aboutUser}>
                <p className={styles.firstname}>Alexander Vance</p>
                <p className={styles.userLevel}>Admin Access</p>
            </div>
            <img src="user.png" alt="user.png" />
        </div>
    </header>
  )
}

export default Header
