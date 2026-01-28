import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import styles from './Footer.module.scss';


export const Footer = () => {
    return (
      <MDBFooter style={{backgroundColor: "#202226"}} className={`text-center text-lg-start text-muted ${styles.footer}`}>
        <section className={`d-flex justify-content-center justify-content-lg-between p-4 border-bottom ${styles.footerSocial}`}>
          <div className={`me-5 d-none d-lg-block ${styles.footerSocialText}`}>
            <span>Присоединяйтесь к нам в социальных сетях</span>
          </div>
  
          <div className={styles.footerSocialIcons}>
            <a href="https://web.telegram.org/" aria-label="link to telegram" target="_blank" rel="noopener noreferrer">
              <FaTelegram className={styles.socialIcon} />
            </a>
            <a href="https://vk.com/" aria-label="link to vkontakte" target="_blank" rel="noopener noreferrer">
              <SlSocialVkontakte className={styles.socialIcon} />
            </a>
            <a href="https://web.whatsapp.com/" aria-label="link to whatsapp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.socialIcon} />
            </a>
          </div>
        </section>
  
        <section className={styles.footerContent}>
          <MDBContainer className='text-center text-md-start mt-2'>
            <MDBRow className='mt-2'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h2 className='text-uppercase fw-bold mb-3'>
                  <Link to="/" className={styles.footerLogo}>
                    СТРОЙДВОР
                  </Link>
                </h2>
                <p className={styles.footerDescription}>
                  5000+ видов материалов для стройки, ремонта и благоустройства.
                </p>
              </MDBCol>
  
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className={styles.footerColumn}>Навигация</h6>
                <div className={styles.footerLinks}>
                  <p>
                    <Link to='/' className={styles.footerLink}>
                      Главная страница
                    </Link>
                  </p>
                  <p>
                    <Link to="/stocks" className={styles.footerLink}>
                      Строительные и отделочные материалы
                    </Link>
                  </p>
                  <p>
                    <Link to='/shop' className={styles.footerLink}>
                      Каталог
                    </Link>
                  </p>
                </div>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className={styles.footerColumn}>Дополнительно</h6>
                <div className={styles.footerLinks}>
                  <p>
                    <Link to='/promos' className={styles.footerLink}>
                      Промоакции
                    </Link>
                  </p>
                  <p>
                    <Link to='/daily' className={styles.footerLink}>
                      Режим работы
                    </Link>
                  </p>
                </div>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className={styles.footerColumn}>Контакты</h6>
                <div className={styles.footerContact}>
                  <p>
                    <MDBIcon icon="envelope" className={`me-3 ${styles.mdbIcon}`} />
                    <a href='mailto:info@stroi-dvor.ru' className={styles.contactLink}>
                      info@stroi-dvor.ru
                    </a>
                  </p>
                  <p>
                    <MDBIcon icon="phone" className={`me-3 ${styles.mdbIcon}`} /> 
                    <a href='tel:+79000000000' className={styles.contactLink}>
                      +79000000000
                    </a>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        
        <div className={`${styles.footerBottom} p-4 border-top`}>
          <span>Практический дипломный проект студентки ПрИЗ-501 ЧелГУ Туровой О.М.</span>
        </div>
      </MDBFooter>
    );
}