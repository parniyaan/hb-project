"use client"

import React from 'react';
import styles from './footer.module.sass';
import Container from "@/app/components/container";
import Map from "./map";

function Footer() {


    return (
        <footer id="footer" className={styles.footerContainer}>
            <Container className={styles.container}>
                <Map/>
                <div dir="rtl" className={styles.info}>
                    <ul>
                        <li>منوی سایت</li>
                        <li>
                            <a href="#aboutUs">درباره ی ما</a>
                        </li>
                        <li>
                            <a href="#services">خدمات</a>
                        </li>
                        <li>
                            <a href="#footer">تماس با ما</a>
                        </li>
                        <li>
                            <a href="#product">محصولات</a>
                        </li>

                        <li>
                            <a href="#blog">FAQ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>محصولات</li>
                        <li>سوپرلید</li>
                        <li>باکس</li>
                        <li>گارد عقب جلو</li>
                        <li>بکسل بند</li>
                        <li>گوشواره کمک فنر</li>
                        <li>باربند سقفی</li>
                        <li>و ...</li>
                    </ul>
                    <div className={styles.contactUs}>
                        <span>تماس با ما</span>
                        <a style={{marginBottom: "15px"}}
                           href="https://www.google.com/maps/place/JXM9%2BC8Q,+Malard,+Tehran+Province/@35.6362501,50.9680908,16z/data=!4m5!3m4!1s0x3f8d924de978057f:0xe2224236f0b322e2!8m2!3d35.6335875!4d50.9683594?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
                            ملارد، قشلاق، ویلادشت، خیابان پرچم، کوچه سوم
                        </a>
                        <div className={styles.tel}>
                            <a href="tel:+989961610863"> 09961610863</a>
                            <a href="tel:+989922571679"> - 09922571679</a>
                        </div>
                        <a href="mailto:offroadhb@gmail.com"> offroadhb@gmail.com</a>
                    </div>
                </div>
            </Container>
            <section>
                <small dir="rtl">
                    تمامی حقوق مربوط به HB group می‌باشد &copy; {new Date().getFullYear()}
                </small>
            </section>
        </footer>
    );
}

export default Footer;
