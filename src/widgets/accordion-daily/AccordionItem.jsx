import { useState } from "react";
import { SlPlus } from "react-icons/sl";
import { DailyStocks } from "@/shared/ui/daily-stocks";
import styles from './AccordionDaily.module.scss';

export const AccordionItem = ({ title, stocks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem}>
            <button 
                className={isOpen ? styles.activeAccordion : styles.default} 
                onClick={handleIsOpen}
                aria-expanded={isOpen}
            >
                <p className={styles.accordionHeader}>{title}</p>
                <SlPlus className={styles.arrow} />
            </button>
            <div className={isOpen ? styles.content : styles.hidden}>
                {Object.values(stocks).map(({ name }, index) => (
                    <DailyStocks key={index} name={name} />
                ))}
            </div>
        </div>
    );
};