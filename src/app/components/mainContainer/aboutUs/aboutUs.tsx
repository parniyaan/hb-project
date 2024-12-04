import styles from "./aboutUs.module.sass";
import React from 'react';
import Image from "next/image";

function AboutUs() {

    return (
        <main
            className={styles.aboutUsContainer}
            id="aboutUs"
        >
            <h3 className={styles.aboutUsTitle} dir="rtl">درباره ی ما</h3>
            <div  className={styles.aboutUs}>
                <Image src="/images/logo.png" alt="logo" className={styles.logo} width={1000} height={1000} />
                <p className={styles.aboutUsDes} dir="rtl">
                    با بیش از 30 سال تجربه در زمینه تجهیزات آفرود، کمپانی ما به ارائه محصولات و خدماتی با کیفیت بالا
                    متعهد است. ما از بهترین و باکیفیت‌ترین مواد در تولیدات خود استفاده می‌کنیم تا نیازهای مشتریان را به
                    بهترین شکل ممکن برآورده کنیم. ما به نوآوری و بهبود مداوم افتخار می‌کنیم و هدف‌مان ایجاد خاطراتی
                    فراموش‌نشدنی برای شما در سفرهای خارج از جاده است. با ما، به دنیای جدیدی از ماجراجویی‌ها وارد شوید و
                    از
                    هر لحظه لذت ببرید.
                </p>

            </div>
        </main>
    );
}

export default AboutUs;
