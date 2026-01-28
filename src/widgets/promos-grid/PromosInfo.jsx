import { React, useEffect, useRef } from 'react';
import { dataPromos } from "@/shared/data/data-promos";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './PromosInfo.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const PromosInfo = () => {
    const ref = useRef();
    
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                trigger: el,
                start: "top bottom-=70",
                toggleActions: "play none none reverse"
            }
        })
    }, [])

    return(
        <div className={`${styles.flexAround} ${styles.wrap} ${styles.gap} ${styles.animatedElement}`} ref={ref}>
            {dataPromos.map((element) => {
                const { id, image, name, description } = element;
                return(
                    <div key={id} className={styles.promoCard}>
                        <div className={styles.imageContainer}>
                            <img className={styles.promoImage} src={image} alt="promo" />
                            <div className={styles.textGradient}></div>
                        </div>
                        <p className={`${styles.stockName} ${styles.uppercase}`}>{name}</p>
                        <p className={styles.promoAbout}>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}