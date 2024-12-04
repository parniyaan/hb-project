"use client"

import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import styles from './footer.module.sass';

function Footer() {
    const position: [number, number] = [35.633931, 50.968348];

    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    return (
        <div className={styles.footerContainer} id="footer">
            <MapContainer center={position} zoom={13} className={styles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={markerIcon} />
            </MapContainer>

            <div className={styles.information} dir="rtl">
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>منوی سایت</li>
                    <li className={styles.informationItems}>صفحه ی اصلی</li>
                    <li className={styles.informationItems}>محصولات</li>
                    <li className={styles.informationItems}>درباره ی ما</li>
                    <li className={styles.informationItems}>تماس با ما</li>
                </ul>
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>محصولات</li>
                    <li className={styles.informationItems}>سوپرلید</li>
                    <li className={styles.informationItems}>باکس</li>
                    <li className={styles.informationItems}>گارد عقب جلو</li>
                    <li className={styles.informationItems}>بکسل بند</li>
                    <li className={styles.informationItems}>گوشواره کمک فنر</li>
                    <li className={styles.informationItems}>باربند سقفی</li>
                    <li className={styles.informationItems}>و ...</li>

                </ul>
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>تماس با ما</li>
                    <li className={styles.informationItems} style={{ marginBottom: "15px" }}>
                        آدرس: ملارد، قشلاق، ویلادشت، خیابان پرچم، کوچه سوم
                    </li>
                    <li className={styles.informationItems}>تلفن: 09961610863 - 09922571679</li>
                    <li className={styles.informationItems}>ایمیل: offroadhb@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
