import { useSelector } from "react-redux";
import { selectTotalArticles } from "@/entities/cart/lib/selectors";
import styles from "./TotalArticlesNavbar.module.scss";

export const TotalArticlesNavbar = () => {
    const totalArticles = useSelector(selectTotalArticles);

    return ( 
        <div className={styles.quantityContainer}>
            <p className={styles.quantity}>{totalArticles}</p>
        </div>
    );
};