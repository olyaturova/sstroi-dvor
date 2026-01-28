import { React, useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CgArrowRight } from "react-icons/cg";
import styles from './StockDetails.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const StocksDetailsBottom = ({ imageTwo, name, point }) => {
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
    }, [])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return(
        <div className={`${styles.detailedStocksHeading} ${styles.prosSection}`}>
            <div className={styles.detailedStocksTopPhoto}>
                <img className={`${styles.detailedStockPhoto} ${styles.second}`} src={imageTwo} alt="stock" ref={addtoRefs} />
            </div>
            <div className={styles.columnCenter}>
                {point.map((item, index) => {
                    return(
                        <div key={index} ref={addtoRefs}>
                            <p className={`${styles.stockExplanation} ${styles.middle}`}>
                                <CgArrowRight className={styles.dashIcon} />{item}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}