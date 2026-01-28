import styles from './ModalPromo.module.scss';

export const ModalPromo = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    const handleOverlayClick = (e) => {
        // Закрываем только при клике на оверлей, не на контент
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };
    
    return (
        <div className={styles.modalPromo}>
            <div 
                className={styles.overlayPromo}
                onClick={handleOverlayClick}
            >
                <div className={styles.modalContentWrapper}>
                    {children}
                </div>
            </div>
        </div>
    );  
};