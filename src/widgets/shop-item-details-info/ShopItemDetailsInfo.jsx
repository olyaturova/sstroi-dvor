import { React, useEffect, useRef } from "react";
import { ChangeQuantity } from "@/shared/ui/change-quantity";
import { useDispatch, useSelector } from "react-redux";

import { 
    addItemToCart, 
    updateCartItemQuantity
} from "@/entities/cart/model/cart-slice";

import { selectCartItems } from "@/entities/cart/lib/selectors";
import { TbShoppingBagPlus } from "react-icons/tb";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from './ShopItemDetailsInfo.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const ShopItemDetailsInfo = ({ 
    image, 
    name, 
    price, 
    quantity, 
    setQuantity, 
    product 
}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); 
    
    const productId = product?._id || product?.id;
 
    const productInCart = cartItems.some(cartItem => 
        cartItem.productId === productId || 
        cartItem.productId === product?._id || 
        cartItem.productId === product?.id
    );

    const handleClick = () => {
        if (!productId) {
            console.error("Product ID is undefined", product);
            return;
        }
        
        if (productInCart) {
            dispatch(updateCartItemQuantity({
                productId: productId,
                quantity: quantity,
            }));
        } else {
            dispatch(addItemToCart({ 
                product: {
                    ...product,
                    id: productId,
                    _id: product?._id 
                }, 
                quantity: quantity 
            }));
        }
    };

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
            });
        });
    }, []);

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };

    const formatPrice = (price) => {
        if (!price && price !== 0) return "Цена не указана";
        return new Intl.NumberFormat('ru-RU').format(price) + " руб.";
    };

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = '/src/shared/assets/shop/default-product.svg';
    };

    return(
        <div className={styles.shopItemDetailsInfo}>
            <div className={styles.detailedItemsHeading}>
                <div className={`${styles.column} ${styles.relative}`} ref={addtoRefs}>
                    <img 
                        className={styles.itemImageDetailed} 
                        src={image || '/src/shared/assets/shop/default-product.svg'} 
                        alt={name || "Товар"} 
                        onError={handleImageError}
                    />
                    <div className={styles.newBadge}>
                        <p className={styles.newSign}>Участвует в акции</p>
                    </div>
                </div>
                <div className={styles.columnLeft}>
                    <p className={styles.detailedItemName} ref={addtoRefs}>
                        {name || product?.name || "Название товара не указано"}
                    </p>
                    <p className={styles.detailedItemPrice} ref={addtoRefs}>
                        {formatPrice(price)}
                    </p>
                    <div className={styles.addedItems} ref={addtoRefs}>
                        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    </div>
                    <div>
                        <button 
                            className={styles.ctaButton} 
                            onClick={handleClick}
                            disabled={!productId}
                        >
                            <TbShoppingBagPlus className={styles.shoppingBagIcon} /> 
                            {productInCart ? "Добавить еще" : "Добавить в корзину"}
                        </button>
                        {!productId && (
                            <p className={styles.errorMessage}>
                                Ошибка: ID товара не определен
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};