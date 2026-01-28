import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataBenefits } from "@/shared/data/data-benefits";
import styles from './Benefits.module.scss'; 

gsap.registerPlugin(ScrollTrigger);

export const Benefits = () => {
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
        <section className={styles.benefits}>
            {dataBenefits.map((benefit) => {
                const { id, icon: IconComponent, headingOne, subheading } = benefit;
                return(
                    <div key={id} className={styles.benefit} ref={addtoRefs}>
                        <p className={styles.benefitIcon}>
                            <IconComponent />
                        </p>
                        <br />
                        <p className={`${styles.benefitHeading} ${styles.upper}`}>
                            {headingOne}
                        </p>
                        <p className={styles.benefitExplanation}>
                            {subheading}
                        </p>
                    </div>
                )
            })}
        </section>
    )
}