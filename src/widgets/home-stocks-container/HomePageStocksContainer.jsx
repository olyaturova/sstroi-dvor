import { dataHomePageStocks } from "@/shared/data/data-home-page-stocks";
import styles from './HomePageStocksContainer.module.scss';

export const HomePageStocksContainer = () => {
    return(
        <section className={`${styles.stocksGridSection} py-5`}>
            <div className="container">
                <div className="row g-4">
                    {dataHomePageStocks.map((item) => (
                        <div 
                            key={item.id} 
                            className={`col-lg-4 col-md-6 ${styles.stockCol}`}
                        >
                            <div className={`card ${styles.stockCard} border-0 overflow-hidden`}>
                                <div className={`position-relative ${styles.stockImageContainer}`}>
                                    <img 
                                        className={`img-fluid ${styles.stockImage}`} 
                                        src={item.image} 
                                        alt={item.name}
                                    />
                                    <div className={`position-absolute w-100 ${styles.stockOverlay}`}>
                                        <h3 className={`h5 mb-0 ${styles.stockTitle}`}>
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}