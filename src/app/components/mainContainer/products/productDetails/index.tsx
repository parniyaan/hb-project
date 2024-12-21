'use client';

import React, { useState } from 'react';
import styles from './productDetails.module.sass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CloseIcon from "@mui/icons-material/Close";
import Slider from "./slider";

const proList = [
    'سوپرلید',
    'باکس',
    'گارد عقب و جلو',
    'بکسل بند',
    'گوشواره کمک فنر',
    'باربند سقفی',
    'رول بال',
    'لاینر(کفی عقب)',
    'سپر اسپورت',
    'انواع پروژکتورها',
];

const properties = [
    { title: 'رنگ:', value: 'دلخواه' },
    { title: 'ابعاد:', value: 'متناسب با خودرو شما' },
    { title: 'ضد ضربه:', value: 'بله' },
    { title: 'ضد زنگ زدگی:', value: 'بله' },
    { title: 'جنس:', value: 'آهن' },
    { title: 'وزن:', value: 'سبک و قابل حمل' },
];

function ProductsDetails({ selectedCar, showProduct, setShowProduct }: {
    selectedCar: any,
    showProduct: any,
    setShowProduct: any
}) {

    const [menuSelected, setMenuSelected] = useState(false);

    if (!selectedCar) return null;

    function openMenuHandler() {
        setMenuSelected(!menuSelected);
    }

    if (showProduct) return (
        <main className={styles.product} dir="rtl">
            <div className={styles.content}>
                <h2 className={styles.carName}>{selectedCar.name}</h2>
                <div className={styles.information}>
                    <Slider selectedCar={selectedCar}/>
                    <div className={styles.carDescription}>
                        <h2 className={styles.infoTitle}>اطلاعات محصولات</h2>
                        <h3 className={styles.relatedProduct}>
                            محصولات مرتبط
                            <span className={styles.openIcon}>
                                <ArrowDropDownCircleIcon onClick={openMenuHandler} className={styles.arrowIcon}/>
                            </span>
                        </h3>
                        {menuSelected &&
                            <ul className={styles.proList}>
                                {proList.map((item, index) => (
                                    <li key={index} className={styles.proItems}>{item}</li>
                                ))}
                            </ul>
                        }
                            <>
                                <div className={styles.carDes}>
                                    <h3 className={styles.carDesTitle}>توضیحات:</h3>
                                    <p className={styles.carDesContent}>{selectedCar.information}</p>
                                </div>
                                <div className={styles.productProperties}>
                                    <h3>مشخصات محصول</h3>
                                    <ul className={styles.productList}>
                                        {properties.map((property, index) => (
                                            <li key={index}>
                                                <h4>{property.title}</h4>
                                                <h5>{property.value}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>

                    </div>
                </div>
            </div>
            <CloseIcon className={styles.closeIcon} onClick={() => setShowProduct(false)} />
        </main>
    );
}

export default ProductsDetails;
