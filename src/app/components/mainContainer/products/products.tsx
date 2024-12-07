'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import styles from './products.module.sass';
import Button from '@mui/material/Button';
import carData from '@/app/data/cars';
import Container from "@/app/components/container";

function Products() {
    const [ShowProduct, setShowProduct] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);


    const toggleShowMore = () => setShowMore(!showMore);
    const displayedCars = showMore ? carData : carData.slice(0, 6);

    function handleProductClick(product: any) {
        setSelectedCar(product);
        setShowProduct(!ShowProduct)
    }


    return (
        <main className={styles.productsSection} id="product">
            <Container className={styles.contaienr}>
                <h2>محصولات</h2>
                <ul>
                    {displayedCars.map((car, index) => (
                        <li
                            key={index}
                            onClick={() => handleProductClick(car)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={car.src}
                                    alt={car.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className={styles.productImage}
                                />
                            </div>

                            <div className={styles.overlay}>
                                <h3 className={styles.productName}>{car.name}</h3>
                                <p className={styles.productDescription}>{car.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={toggleShowMore}
                    variant="contained"
                >
                    {showMore ? '...نمایش کمتر' : ' ...نمایش بیشتر'}
                </Button>
            </Container>
        </main>
    );
}

export default Products;

