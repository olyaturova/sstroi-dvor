import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './StockDetails.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const StocksDetailsTop = ({ image, name, explanation }) => {
    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=70",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, []);

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    return (
        <div
            className={styles.stockCover}
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className={styles.headingCover}>
                <div className={`${styles.detailedStocksHeading} ${styles.columnCenter} ${styles.center}`}>
                    <h4 className={styles.detailedStockHeading} ref={addtoRefs}>{name}</h4>
                </div>
            </div>
        </div>
    );
};