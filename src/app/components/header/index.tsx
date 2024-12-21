'use client';

import styles from "./header.module.sass";
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Index from "./navbar";
import Container from "@/app/components/container";

function Header() {
    const[burgerMenu, setBurgerMenu] = useState(true);

    function menuHandler() {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <div className={styles.header}>
            <Container className={styles.container}>
                <div>
                    {burgerMenu ? (
                        <MenuIcon className={styles.menu} fontSize="large" onClick={menuHandler}/>
                    ) : (
                        <CloseIcon className={styles.menu} fontSize="large" onClick={menuHandler}/>
                    )}
                </div>
                <Index burgerMenu={burgerMenu}/>
                <div>
                    <h1 dir="rtl"><span>ماجراجویی های</span> فراموش
                        نشدنی تان را با ما بسازید <span>!</span></h1>
                    <p dir="rtl">
                        کمپانی <span>HB</span> با 30 سال تجربه در زمینه تجهیزات
                        آفرود، مفتخر است تا بهترین خدمات را به شما ارائه دهد. ما
                        همراه شما در هر ماجراجویی خواهیم بود.
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default Header;
