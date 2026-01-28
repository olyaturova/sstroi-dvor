import { Link } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from '@/shared/api/constants';
import styles from './Product.module.scss';

export const Product = ({ product }) => {
    const [imageError, setImageError] = useState(false);
    
    const productId = product._id || product.id;

    const getImageUrl = () => {
        if (imageError) {
            return '/src/shared/assets/shop/default-product.svg';
        }
        
        const productImage = product.imageUrl || product.image;
        if (productImage) {
            return API_ENDPOINTS.getImageUrl(productImage);
        }
        
        return '/src/shared/assets/shop/default-product.svg';
    };
    
    const imageUrl = getImageUrl();
    const isDefaultImage = imageUrl.includes('default-product');
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    return(
        <div className={styles.productCard}>
            <Link to={`/shop/${productId}`} className={styles.link}>
                <div className={`${styles.column} ${styles.item}`}>
                    <div className={`${styles.imageContainer} ${isDefaultImage ? styles.defaultImage : ''}`}>
                        <img 
                            className={`${styles.itemImage} ${isDefaultImage ? styles.contain : styles.cover}`}
                            src={imageUrl}
                            alt={product.name || product.title}
                            onError={handleImageError}
                            loading="lazy"
                        />
                    </div>
                    <p className={styles.itemPrice}>{product.price} руб.</p>
                    <span className={styles.itemName}>{product.name || product.title}</span>
                </div>
            </Link>
        </div>
    );
};