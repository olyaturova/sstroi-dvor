import { Link } from "react-router-dom";
import {  HomePageStocksContainer } from "../home-stocks-container";
import styles from './HomePageStocks.module.scss';

export const HomePageStocks = () => {
    return(
        <section className={`${styles.section} py-lg-5 py-4`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-12">
                        <div className="text-center mb-5">
                            <h2 className={`display-4 fw-bold mb-3 ${styles.heading}`}>
                                Строительные и <span className={styles.outlinedText}>отделочные материалы</span>
                            </h2>
                        </div>
                        
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 col-md-10 col-12">
                                <p className={`text-center mb-0 ${styles.leadText}`}>
                                    Любая предлагаемая нами продукция будет иметь
                                    <span className={styles.highlight}> достойное качество и привлекательную цену.</span> 
                                    Ассортимент товаров давно вышел за рамки стройматериалов и постоянно расширяется.
                                </p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <HomePageStocksContainer />
                        </div>
                        
                        <div className="text-center">
                            <Link 
                                to="/stocks" 
                                className={`btn btn-lg ${styles.actionBtn}`}
                            >
                                <span className="d-flex align-items-center justify-content-center w-100">
                                    Больше информации
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}