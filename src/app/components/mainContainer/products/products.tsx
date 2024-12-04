'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import styles from './products.module.sass';
import Button from '@mui/material/Button';
import carData from '@/app/data/cars';

function Products() {
    const [ShowProduct, setShowProduct] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);


    const toggleShowMore = () => setShowMore(!showMore);
    const displayedCars = showMore ? carData : carData.slice(0, 6);

    function handleProductClick(product: any) {
        console.log(product);
        setSelectedCar(product);
        setShowProduct(!ShowProduct)
    }


    return (
        <main className={styles.productsSection} id="product">
            <h1 className={styles.productsTitle}>محصولات</h1>
            <ul className={styles.productsGrid}>
                {displayedCars.map((car, index) => (
                    <li
                        key={index}
                        onClick={() => handleProductClick(car)}
                        className={styles.productCard}
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
                            <h1 className={styles.productName}>{car.name}</h1>
                            <p className={styles.productDescription}>{car.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Button
                className={styles.showMore}
                onClick={toggleShowMore}
                variant="contained"
                sx={{
                    backgroundColor: 'var(--primary-color)',
                    color: '#ffffff',
                    margin: '50px 0 0 40px',
                    padding: '10px 30px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#d19700',
                        transform: 'scale(1.05)',
                    },
                }}
            >
                {showMore ? '...نمایش کمتر' : ' ...نمایش بیشتر'}
            </Button>
        </main>
    );
}

export default Products;

