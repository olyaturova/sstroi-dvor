import styles from './Tabs.module.scss';

export const TabInfoTwo = ({ 
    brand, 
    productType, 
    productWidth, 
    productHeight, 
    productThickness,
    category,
    applying
}) => {
    return (
        <div className={styles.detailedItemList}>
            <h3>Характеристики</h3>
            <br />
            <div className={styles.itemList}>
                {brand && (
                    <div className={styles.listLeft}>
                        <span className={styles.listTitle}>Бренд: </span>
                        <span className={styles.listDescription}>{brand}</span>
                    </div>
                )}
                
                {productType && (
                    <div className={styles.listLeft}>
                        <span className={styles.listTitle}>Тип товара: </span>
                        <span className={styles.listDescription}>{productType}</span>
                    </div>
                )}
                
                {category && (
                    <div className="list-left">
                        <p className="list-title">Категория: </p>
                        <p className="list-description">{category}</p>
                    </div>
                )}

                {applying && (
                    <div className="list-left">
                        <p className="list-title">Применение: </p>
                        <p className="list-description">{applying}</p>
                    </div>
                )}
    
    
                
                {productWidth && (
                    <div className="list-left">
                        <p className="list-title">Ширина: </p>
                        <p className="list-description">{productWidth} мм</p>
                    </div>
                )}
                
                {productHeight && (
                    <div className="list-left">
                        <p className="list-title">Высота: </p>
                        <p className="list-description">{productHeight} мм</p>
                    </div>
                )}
                
                {productThickness && (
                    <div className="list-left">
                        <p className="list-title">Толщина: </p>
                        <p className="list-description">{productThickness} мм</p>
                    </div>
                )}
            </div>
        </div>
    );
};