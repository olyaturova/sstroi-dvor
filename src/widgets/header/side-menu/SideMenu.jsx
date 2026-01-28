import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import styles from './SideMenu.module.scss';

export const SideMenu = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link 
            to="/stocks" 
            className={styles.asideLink} 
            onClick={handleLinkClick}
          >
            СТРОИТЕЛЬНЫЕ И ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link 
            to="/promos" 
            className={styles.asideLink} 
            onClick={handleLinkClick}
          >
            ПРОМОАКЦИИ
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link 
            to="/shop" 
            className={styles.asideLink} 
            onClick={handleLinkClick}
          >
            КАТАЛОГ СТРОЙМАТЕРИАЛОВ
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link 
            to="/daily" 
            className={styles.asideLink} 
            onClick={handleLinkClick}
          >
            РЕЖИМ РАБОТЫ
          </Link>
        </li>
      </ul>
      
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
      
      <Link 
        to="/form" 
        className={styles.navBtn}
        onClick={handleLinkClick}
      >
        <span className={styles.messageLink}>СВЯЗАТЬСЯ С НАМИ</span>
      </Link>
    </div>
  );
};