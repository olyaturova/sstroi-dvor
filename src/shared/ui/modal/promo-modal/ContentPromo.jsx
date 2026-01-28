import promoOne from "@/shared/assets/promos/drop.png";
import snow from "@/shared/assets/promos/snow.png";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from './ModalPromo.module.scss';

export const ContentPromo = ({ onClose }) => {
    const handleClose = (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        if (onClose) onClose();
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onClose) {
            e.stopPropagation();
            onClose();
        }
    };

    return (
        <div className={styles.modalContent}>
            <VscClose 
                className={styles.closeModalBtn} 
                onClick={handleClose} 
                aria-label="Закрыть модальное окно"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            />
            <img src={snow} alt="Снежинка" className={styles.snow} />
            <img src={snow} alt="Снежинка" className={styles.snowTwo} />
            <img src={snow} alt="Снежинка" className={styles.snowFive} />
            <h2 className={styles.modalHeading}>Зимняя акция</h2>
            <p className={styles.modalText}>-21% на строительные материалы.</p>
            <p className={styles.modalText}>* скидка действует до конца февраля.</p>
            <img src={promoOne} alt="Промо акция" className={styles.promoPhoto} />
            <button className={styles.modalCta} onClick={handleClose}>
                <Link to="/promos" className={styles.promosLink}>
                    Другие скидки
                </Link>
            </button>
        </div>
    );
};