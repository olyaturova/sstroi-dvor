import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataHomePageStocks } from "@/shared/data/data-home-page-stocks";
import { FeedbackForm } from "@/features/feedback-form";
import styles from "./StocksDetails.module.scss";
import { Benefits } from "@/widgets/benefits-grid";
import { StocksDetailsBottom, StocksDetailsDescription, StocksDetailsTop } from "@/widgets/stock-details";

const StocksDetails = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const [showText, setShowText] = useState(false);
    
    const showTextClick = (elem) => {
        elem.showMore = !elem.showMore;
        setShowText(!showText);
    };

    const classData = dataHomePageStocks.find(element => element.title === title);

    if (!classData) {
        return <div className="text-center py-5">Товар не найден</div>;
    }

    const { id, image, name, imageTwo, point, description, showMore } = classData;

    return (
        <div className={`${styles["detailed-stock"]} bg-black`}>
            <div key={id} className={styles["stocks-column"]}>
                <StocksDetailsTop image={image} name={name} />
           
                <StocksDetailsBottom 
                    imageTwo={imageTwo} 
                    name={name} 
                    point={point} 
                />
                
                <hr className={`${styles["horizontal-line"]} my-4`} />
                
                <div className={`${styles["stock-description"]} container py-4`}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <StocksDetailsDescription 
                                description={description} 
                                showMore={showMore} 
                                showTextClick={() => showTextClick(classData)} 
                            /> 
                            <button 
                                className={`${styles.cta} ${styles.low} btn mt-4`} 
                                onClick={() => navigate(-1)}
                            >
                                Вернуться назад
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <Benefits />
                    <FeedbackForm />
                </div>
            </div>
        </div>
    );
};

export default StocksDetails;