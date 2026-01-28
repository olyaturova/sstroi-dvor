import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
    return(
        <div className={styles.socialLinks}>
            <a 
                href="https://web.telegram.org/" 
                aria-label="Telegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <FaTelegram />
            </a>
            <a 
                href="https://vk.com/" 
                aria-label="VKontakte" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <SlSocialVkontakte />
            </a>
            <a 
                href="https://web.whatsapp.com/" 
                aria-label="WhatsApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
            >
                <FaWhatsapp />
            </a>
        </div>
    );
};