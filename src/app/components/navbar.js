"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";



function Navbar() {
    const [selectedItem, setSelectedItem] = useState("inicio");

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }





    return (
        <nav className={styles.navbar}>
            <div
                className={styles.navbarItem + `  ${selectedItem === 'inicio' ? styles.selected : ''}`}
                onClick={() => handleItemClick("inicio")}
            >
                <a href="#header">Inicio</a>
            </div>
            <div
                className={styles.navbarItem = styles.navbarItem + ` ${selectedItem === 'Skills' ? styles.selected : ''}`}
                onClick={() => handleItemClick("skills")}
            >
                <a href="#info"> Skills</a>
            </div>
        </nav>
    )
}

export default Navbar;
