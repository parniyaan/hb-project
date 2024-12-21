'use Client'

import Image from "next/image";
import styles from "./slider.module.sass";
import React, {useState} from "react";
import { ArrowLeft, ArrowRight} from "@mui/icons-material";

export default function Slider({selectedCar}: { selectedCar: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderHandler = (direction: any) => {
        if (direction === "next") {
            setCurrentIndex((prevIndex) =>
                prevIndex === selectedCar.images.length - 1 ? 0 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? selectedCar.images.length - 1 : prevIndex - 1
            );
        }
    }

    return (
        <main className={styles.slider}>
            <div>
                <Image
                    className={styles.images}
                    key={selectedCar.images[currentIndex]}
                    src={selectedCar.images[currentIndex]}
                    alt="sample"
                    width={800}
                    height={300}
                />
            </div>
            <div>
            <span>
                <ArrowRight className={styles.icons} onClick={() => sliderHandler("next")}/>
            </span>
                <span>
                    <ArrowLeft className={styles.icons} onClick={() => sliderHandler("previous")}/>
            </span>
            </div>
        </main>
    )
}

