import styles from "./aboutUs.module.sass";
import React from 'react';
import Image from "next/image";
import Container from "@/app/components/container";

function AboutUs() {

    return (
        <main
            className={styles.aboutUs}
            id="aboutUs"
        >
            <Container className={styles.container}>
                <h2 dir="rtl">درباره ی ما</h2>
                <div>
                    <Image src="/images/logo.png" alt="logo" width={800} height={800}/>
                    <p dir="rtl">
                        با بیش از 30 سال تجربه در زمینه تجهیزات آفرود، کمپانی ما به ارائه محصولات و خدماتی با کیفیت بالا
                        متعهد است. ما از بهترین و باکیفیت‌ترین مواد در تولیدات خود استفاده می‌کنیم تا نیازهای مشتریان را
                        به
                        بهترین شکل ممکن برآورده کنیم. ما به نوآوری و بهبود مداوم افتخار می‌کنیم و هدف‌مان ایجاد خاطراتی
                        فراموش‌نشدنی برای شما در سفرهای خارج از جاده است. با ما، به دنیای جدیدی از ماجراجویی‌ها وارد
                        شوید و
                        از
                        هر لحظه لذت ببرید.
                    </p>
                </div>
            </Container>
        </main>
    );
}

export default AboutUs;
