import { HashLink as Link } from 'react-router-hash-link';
import styles from './SpecialOffer.module.scss';

export const SpecialOffer = () => {
    return(
        <div className={styles.specialOffer}>
      
            <div className={styles.overlay}></div>
            
            <div className={styles.content}>
                <p className={styles.offerHeading}>
                    Выбирайте нас, и получите <span className={styles.orange}>специальное предложение</span>
                </p>
                
                <p className={styles.offerSubheading}>
                    Грамотные консультанты помогут Вам с поиском товара, оплатой и доставкой.
                </p>
                
                <button className={styles.ctaButton}>
                    <Link smooth to="/#form" className={styles.ctaLink}>
                        Узнать подробнее
                    </Link>
                </button>
            </div>
        </div>
    )
}