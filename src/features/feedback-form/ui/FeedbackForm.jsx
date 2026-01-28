import { Link } from "react-router-dom";
import { ValidationError, useForm } from '@formspree/react';
import Checkbox from '@mui/material/Checkbox';
import { Fade } from "react-awesome-reveal";
import styles from './FeedbackForm.module.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FeedbackForm = () => {
  const [state, handleSubmit] = useForm("mknkzlng");
  
  if (state.succeeded) {
    return (
      <div className={`d-flex flex-column justify-content-center align-items-center ${styles.formFeedback}`}>
        <p className={styles.formResponse}>Спасибо за ваше сообщение.</p>
        <p className={styles.formResponse}>Наши менеджеры скоро свяжутся с вами.</p>
      </div>
    );
  }

  return (
    <section className={`${styles.feedbackForm} ${styles.animatedForm}`}>
      <Fade direction="up" duration="2000">
        <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
          <h4 className={`text-dark ${styles.heading}`}>
            <span className={`${styles.outlined} ${styles.outlinedBorderBlack}`}>Стройте с нами</span>
          </h4>
          <p className={`${styles.description} ${styles.bottomMargin}`}>
            Пожалуйста, <span className={styles.orange}>заполните форму.</span> Наши менеджеры скоро свяжутся с вами.
          </p>
        </div>
        
        <form method="POST" onSubmit={handleSubmit} className="row g-4">
          <div className="col-12">
            <div className="mb-3">
              <input 
                className={`form-control ${styles.formInput}`} 
                placeholder="Ваше имя" 
                id="name" 
                type="text" 
                name="name" 
                required 
              />
              <ValidationError 
                prefix="Name" 
                field="name" 
                errors={state.errors} 
                className={styles.validationError}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <input 
                className={`form-control ${styles.formInput}`} 
                placeholder="Ваш номер телефона" 
                id="phone" 
                type="tel" 
                name="phone" 
                required 
              />
              <ValidationError 
                prefix="Phone" 
                field="phone" 
                errors={state.errors} 
                className={styles.validationError}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <input 
                className={`form-control ${styles.formInput}`} 
                placeholder="Ваш email" 
                id="email" 
                type="email" 
                name="email" 
                required 
              />
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors} 
                className={styles.validationError}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <textarea 
                className={`form-control ${styles.formInput} ${styles.textarea}`} 
                placeholder="Напишите сообщение..." 
                id="message" 
                name="message" 
                rows="4"
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message" 
                errors={state.errors} 
                className={styles.validationError}
              />
            </div>
          </div>
          
          <div className="col-12 d-flex justify-content-center">
            <div className={styles.btnMargin}>
              <button 
                className={styles.formButton} 
                type="submit" 
                disabled={state.submitting}
              >
                Отправить
              </button>
            </div>
          </div>
          
          <div className="col-12">
            <div className={`d-flex align-items-center ${styles.checkboxContainer}`}>
              <Checkbox {...label} color="secondary" />
              <span className={styles.privatePolicy}>
                Нажимая кнопку "Отправить" вы соглашаетесь с{' '}
                <Link to="/privacy">
                  <span className={styles.privacyLink}>Политикой конфиденциальности</span>
                </Link>
              </span>
            </div>
          </div>
        </form>
      </Fade>
    </section>
  );
};