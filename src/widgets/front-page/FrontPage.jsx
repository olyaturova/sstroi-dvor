import { HashLink as Link } from 'react-router-hash-link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import mainPhoto from "@/shared/assets/main-photo.jpg";
import styles from './FrontPage.module.scss';

gsap.registerPlugin(useGSAP);

export const FrontPage = () => {
    const animateFrontPage = useRef();

    useGSAP(
        () => {
            gsap.from(`.${styles.title}`, { 
                delay: 0.5, 
                duration: 1, 
                y: -70, 
                opacity: 0, 
                ease: "sine.out" 
            });
            gsap.from(`.${styles.description}`, { 
                delay: 2, 
                duration: 1, 
                y: 70, 
                opacity: 0, 
                ease: "sine.out" 
            });
            gsap.from(`.${styles.ctaButton}`, { 
                delay: 2, 
                duration: 1, 
                y: 70, 
                opacity: 0, 
                ease: "sine.out" 
            });
        },
        { scope: animateFrontPage }
    );

    return(
        <section className={styles.frontPage} ref={animateFrontPage}>
            <img 
                src={mainPhoto} 
                alt="Строительные материалы" 
                className={styles.mainPhoto} 
            /> 
            
            <h2 className={styles.title}>
                Добро пожаловать в <span className={styles.outlinedWords}>&nbsp;СТРОЙ-ДВОР&nbsp;</span>
            </h2>
            
            <h3 className={styles.description}>
                База Строй Двор предлагает широкий выбор материалов для строительства от фундамента до крыши, 
                внутренней и наружной отделки, устройства инженерных коммуникаций, сантехники - все что может 
                потребоваться для стройки и ремонта Вы найдете у нас. Для приусадебного участка и дачи в наличии 
                садовый инвентарь, инструмент и принадлежности. У нас есть что выбрать !
            </h3>
            
            <button className={styles.ctaButton}>
                <Link smooth to="/stocks" className={styles.ctaLink}>
                    Наш ассортимент
                </Link>
            </button>
        </section>
    );
};