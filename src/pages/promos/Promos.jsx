import { React, useEffect, useRef } from "react";
import { FeedbackForm } from "@/features/feedback-form";
import { PromosInfo } from "@/widgets/promos-grid";
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Promos.module.scss';
import { Benefits } from "@/widgets/benefits-grid";

gsap.registerPlugin(ScrollTrigger);

const Promos = () => {
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
        <div className={`container-fluid ${styles.promosContainer}`}>

            <section className={`row justify-content-center py-5 ${styles.heroSection}`}>
                <div className="col-12 col-lg-8 text-center mb-5">
                    <h1 className={`display-4 fw-bold mb-4 ${styles.heading}`} ref={addtoRefs}>
                        Выгодные предложения <br />
                        <span className={styles.outlinedText}>для наших клиентов</span>
                    </h1>
                    <p className={`lead text-secondary mb-5 ${styles.description}`} ref={addtoRefs}>
                        Мы всегда думаем и заботимся о наших клиентах. Поэтому мы постоянно проводим различные акции, 
                        чтобы удовлетворить ваши потребности. Воспользуйтесь этой возможностью. 
                        Выберите свою акцию уже сегодня.
                    </p>
                </div>
                

                <div className="col-12">
                    <div className="card shadow-sm border-0 bg-transparent">
                        <div className="card-body p-0">
                            <PromosInfo />
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center mt-5">
                    <Link 
                        smooth 
                        to="/#form" 
                        className={`btn btn-primary btn-lg px-5 py-3 ${styles.ctaButton}`} 
                        ref={addtoRefs}
                    >
                        <i className="bi bi-info-circle me-2"></i>
                        Узнать подробнее
                    </Link>
                </div>
            </section>

            <section className={`row justify-content-center py-5 ${styles.benefitsSection}`}>
                <div className="col-12">
                                <Benefits />
                </div>
            </section>

            <section id="form" className={`row justify-content-center py-5 ${styles.feedbackSection}`}>
                <div className="col-12 col-lg-10 col-xl-8">
                            <FeedbackForm />
                </div>
            </section>
        </div>
    )
}

export default Promos;