import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbShoppingBagHeart } from "react-icons/tb";
import { Cart } from "@/widgets/cart/cart";
import logo from "@/shared/assets/logo.png";
import styles from './Navbar.module.scss';
import { TotalArticlesNavbar } from "../../cart/cart-total-indicator";
import { SideMenu } from "../side-menu/SideMenu";

export const Navbar = ({ active, setActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = (e) => {
    e?.stopPropagation();
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleCart = () => {
    setActive(!active);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.mainMenu}>
          <div className={styles.navbarLogo}>
            <Link to="/" className={styles.navLink}>
              <img src={logo} alt="logo" className={styles.companyLogo} />
            </Link>
          </div>
          
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/stocks" className={styles.navLink}>
                СТРОИТЕЛЬНЫЕ И ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/promos" className={styles.navLink}>
                ПРОМОАКЦИИ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/shop" className={styles.navLink}>
                КАТАЛОГ СТРОЙМАТЕРИАЛОВ
              </Link>
            </li>
          </ul>
          
          <div className={styles.cartQuantity}>
            <button 
              onClick={toggleCart} 
              className={styles.cartBtn}
              aria-label="Корзина покупок"
            > 
              <TbShoppingBagHeart className={styles.cartIcon} />
            </button>
            <TotalArticlesNavbar />
          </div>
          
          <div 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
            onClick={toggleMenu}
            role="button"
            aria-label="Меню"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu(e)}
          >
            <div className={styles.hamburger}>
              <span className={styles.hamburgerTop}></span>
              <span className={styles.hamburgerMiddle}></span>
              <span className={styles.hamburgerBottom}></span>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Корзина */}
      <div className={active ? `${styles.cart} ${styles.openCart}` : styles.cart}>
        <Cart active={active} setActive={setActive} />
      </div>
      
      {/* Боковое меню */}
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};