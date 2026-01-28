import { React, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from './StocksInfo.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const StocksInfo = ({ stocks }) => {
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
        <div className={`${styles.flexAround} ${styles.wrap} ${styles.animatedElement}`} ref={ref}>
            {stocks.map((element) => {
                const { id, image, name } = element;
                return(
                    <div key={id} className={styles.stockCard}>
                        <div className={styles.classCardInner}>
                            <Link to={`/stocks/${element.title}`} className={styles.stockLink}>
                                <img className={styles.stockPhoto} src={image} alt="stock" />
                                <div className={styles.imageOverlay}></div>
                            </Link>
                            <p className={styles.stockName}>{name}</p>
                            <Link to={`/stocks/${element.title}`}>
                                <RiArrowRightSLine className={styles.rightArrow} />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}