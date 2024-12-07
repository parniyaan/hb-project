import styles from './services.module.sass';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React from 'react';
import Container from "@/app/components/container";
import Image from "next/image";

function Services() {

    const servicesData = [
        {
            title: "تحویل رایگان و نصب رایگان",
            des: "محصولات ما بدون هزینه اضافی به آدرس شما ارسال می‌شوند و نصب آنها به‌صورت رایگان انجام می‌شود تا از راحتی و آسایش شما در استفاده از محصولات مطمئن شویم.",
            icon: <LocalShippingIcon style={{fontSize: "50px", color: "var(--primary-color)"}}/>
        },
        {
            title: "گارانتی",
            des: "خرید از ما به شما این اطمینان را می‌دهد که تمامی محصولات دارای ۲ سال گارانتی هستند، بنابراین می‌توانید با خیال راحت از کیفیت و عملکرد آنها استفاده کنید.",
            icon: <StarIcon style={{fontSize: "50px", color: "var(--primary-color)"}}/>
        },
        {
            title: "کیفیت بالا و هزینه مناسب",
            des: "ما به ارائه محصولاتی با بهترین کیفیت متعهد هستیم و تلاش می‌کنیم تا قیمت‌های مناسب و رقابتی را برای مشتریان خود ارائه دهیم.",
            icon: <MonetizationOnIcon style={{fontSize: "50px", color: "var(--primary-color)"}}/>
        }
    ];

    return (
        <main className={styles.services}>
            <Container className={styles.container}>
                <h2>خدمات</h2>
                <ul>
                    {servicesData.map((item, index) => (
                        <li key={index} className={styles.servicesItem}>
                            <div>{item.icon}</div>
                            <h3 className={styles.servicesItemTitle}>{item.title}</h3>
                            <p dir="rtl" className={styles.servicesItemDes}>{item.des}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </main>
    );
}

export default Services;
