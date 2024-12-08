'use client';

import React, {useState} from 'react';
import styles from './productDetails.module.sass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

function ProductDetails({selectedCar, showProduct, setShowProduct}: {
    selectedCar: any,
    showProduct: boolean,
    setShowProduct: any
}) {
    const [menuSelected, setMenuSelected] = useState(false);

    if (!selectedCar) return null;

    function openMenuHandler() {
        setMenuSelected(!menuSelected);
    }

    if (showProduct) return (
        <main
            className={styles.product}
            dir="rtl"
        >
            <div className={styles.content}
            >
                <h2 className={styles.carName}>{selectedCar.name}</h2>
                <div className={styles.information}>
                    <Carousel className={styles.slider}>
                        {selectedCar.images.map((image: any) => (
                            <Image className={styles.images} key={image} src={image} alt='sample' width={1000} height={550}/>
                        ))}
                    </Carousel>
                    <div className={styles.carDescription}>
                        <h2 className={styles.infoTitle}>اطلاعات محصولات</h2>
                        <h3 className={styles.relatedProduct}>
                            محصولات مرتبط{' '}
                            <span className={styles.openIcon}>
                                 <ArrowDropDownCircleIcon onClick={openMenuHandler}/>
                            </span>
                        </h3>
                        {menuSelected ? (
                            <ul className={styles.proList}>
                                <li className={styles.proItems}>سوپرلید</li>
                                <li className={styles.proItems}>باکس</li>
                                <li className={styles.proItems}>گارد عقب و جلو</li>
                                <li className={styles.proItems}>بکسل بند</li>
                                <li className={styles.proItems}>گوشواره کمک فنر</li>
                                <li className={styles.proItems}>باربند سقفی</li>
                                <li className={styles.proItems}>رول بال</li>
                                <li className={styles.proItems}>لاینر(کفی عقب)</li>
                                <li className={styles.proItems}>سپر اسپورت</li>
                                <li className={styles.proItems}>انواع پروژکتورها</li>
                            </ul>
                        ) : (
                            <>
                                <div className={styles.carDes}>
                                    <h3 className={styles.carDesTitle}>توضیحات:</h3>
                                    <p className={styles.carDesContent}>{selectedCar.information}</p>
                                </div>
                                <div className={styles.productProperties}>
                                    <h3>مشخصات محصول</h3>
                                    <ul className={styles.productList}>
                                        <li>
                                            <h4>رنگ:</h4>
                                            <h5>دلخواه</h5>
                                        </li>
                                        <li>
                                            <h4>ابعاد:</h4>
                                            <h5>متناسب با خودرو شما</h5>
                                        </li>
                                        <li>
                                            <h4>ضد ضربه:</h4>
                                            <h5>بله</h5>
                                        </li>
                                        <li>
                                            <h4>ضد زنگ زدگی:</h4>
                                            <h5> بله</h5>
                                        </li>
                                        <li>
                                            <h4>جنس:</h4>
                                            <h5>آهن</h5>
                                        </li>
                                        <li>
                                            <h4>وزن:</h4>
                                            <h5>سبک و قابل حمل</h5>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <CloseIcon className={styles.closeIcon} onClick={() => setShowProduct(false)}/>
        </main>
    );
}


export default ProductDetails;
