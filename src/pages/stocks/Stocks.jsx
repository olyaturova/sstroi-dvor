import { React, useEffect, useRef, useState } from "react";
import { dataHomePageStocks } from "@/shared/data/data-home-page-stocks";
import { StockFilter } from "@/features/stock-filtering";
import { FeedbackForm } from "@/features/feedback-form";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Stocks.module.scss";
import { StocksInfo } from "../../widgets/stocks-info";
//import { StocksInfo } from "@/widgets/stocks/StocksInfo";

gsap.registerPlugin(ScrollTrigger);

const Stocks = () => {
    const [stocks, setStocks] = useState(dataHomePageStocks);

    const filterStocks = (searchTerm) => {
        const chosenStock = dataHomePageStocks.filter(item => item.searchTerm === searchTerm);
        setStocks(chosenStock);
    }

    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=70",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, [])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return(
        <div className={`${styles["all-stocks"]} bg-black`}>
            <section className="container py-4 py-md-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center mb-4 mb-md-5">
                        <h4 className={`${styles.white} display-4 fw-bold mb-4`} ref={addtoRefs}>
                            Лучший ассортимент <span className={styles.outlined}>для вас</span>
                        </h4>
                        <p className={styles.lead} ref={addtoRefs}>
                            Более <span className={`${styles.orange} fw-bold`}>12 категорий</span> товаров! 
                            Опытные специалисты покажут, расскажут и помогут Вам сделать оптимальный выбор.
                        </p>
                    </div>
                </div>
                
                <div className="row justify-content-center mb-4 mb-md-5">
                    <div className="col-12">
                        <StockFilter 
                            filterStocks={filterStocks} 
                            setStocks={setStocks} 
                            dataHomePageStocks={dataHomePageStocks} 
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <StocksInfo stocks={stocks} />
                    </div>
                </div>
            </section>
            
            <section className={`${styles["form-section"]} container-fluid bg-white py-4 py-md-5`}>
                <div className="container">
                    <FeedbackForm />
                </div>
            </section>
        </div>
    )
}

export default Stocks;