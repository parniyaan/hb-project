"use client"

import Image from 'next/image';
import styles from './navbar.module.sass';
import React from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CategoryIcon from '@mui/icons-material/Category';

function Navbar({burgerMenu}: { burgerMenu: any }) {

    return (
        <nav className={`${styles.navbar} ${burgerMenu ? "" : styles.appeared}`}>
            <Image src='/images/logo.png' alt="logo" className={styles.logo} width={100} height={100}/>
            <ul>
                <li>
                    <a href="#FAQ">FAQ</a>
                    <NotesIcon className={styles.menuIcons}/>
                </li>
                <li>
                    <a href="#footer">تماس با ما</a>
                    <AddIcCallIcon className={styles.menuIcons}/>
                </li>
                <li>
                    <a href="#product">محصولات</a>
                    <CategoryIcon className={styles.menuIcons}/>
                </li>
                <li>
                    <a href="#services">خدمات</a>
                    <AddHomeIcon className={styles.menuIcons}/>
                </li>
                <li>
                    <a href="#aboutUs">درباره ی ما</a>
                    <InfoIcon className={styles.menuIcons}/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
