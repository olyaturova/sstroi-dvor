import { dataAccordion } from "@/shared/data/dataAccordion";
import styles from './AccordionDaily.module.scss';
import { AccordionItem } from "./AccordionItem";

export const AccordionDaily = () => {
    return (
        <div className={styles.accordionContainer}>
            {dataAccordion.map((item, id) => 
                <AccordionItem 
                    key={id}
                    title={item.title}
                    stocks={item.stocks}
                />
            )}
        </div>
    );
};