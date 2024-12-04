'use client'

import React from 'react';
import Image from "next/image";
import styles from  "./WhatsApp.module.sass"

function WhatsApp() {

    return (
            <a href="https://wa.me/+989961610863" className={styles.whatsApp}>
                <Image src="/images/WhatsApp-Logo.wine.svg" alt="WhatsApp" width={150} height={150} />
            </a>
    );
}

export default WhatsApp;
