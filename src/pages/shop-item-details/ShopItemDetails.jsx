import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_ENDPOINTS } from '@/shared/api/constants';
import styles from './ShopItemDetails.module.scss';
import { TabInfoOne, TabInfoTwo } from "@/shared/tabs";
import { ShopItemDetailsInfo } from "@/widgets/shop-item-details-info";
import { Tabs } from "@/shared/tabs";


const ShopItemDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(API_ENDPOINTS.getShopItemUrl(id));

                const productData = response.data;
                if (productData && !productData.imageUrl && productData.image) {
                    productData.imageUrl = API_ENDPOINTS.getImageUrl(productData.image);
                }
                
                setProduct(productData);
            } catch (err) {
                console.error('Fetch product error:', err);
                setError('Товар не найден');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className={`container py-5 ${styles.shopItemContainer}`}>
                <div className="d-flex flex-column align-items-center justify-content-center py-5">
                    <div className={`spinner-border text-primary ${styles.spinner}`} role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                    <p className="mt-3">Загрузка товара...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className={`container py-5 ${styles.shopItemContainer}`}>
                <div className="card shadow border-0 text-center py-5">
                    <div className="card-body">
                        <h2 className="text-danger mb-3">Товар не найден</h2>
                        <p className="text-muted mb-4">Извините, запрошенный товар не существует или был удален.</p>
                        <button 
                            className="btn btn-primary"
                            onClick={() => navigate('/shop')}
                        >
                            Вернуться в магазин
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const imageUrl = product.imageUrl || API_ENDPOINTS.getImageUrl(product.image);

    const { 
        price, 
        name, 
        applying, 
        fullDescription, 
        brand, 
        productType, 
        productWidth, 
        productHeight, 
        productThickness,
        title,
        category 
    } = product;

    return(
        <div className={styles.shopItemDetails}>
            <section className={`container py-4 ${styles.shopItemContainer}`}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        <div className={styles.detailsWrapper}>
                            <ShopItemDetailsInfo
                                image={imageUrl} 
                                name={name} 
                                price={price} 
                                applying={applying} 
                                quantity={quantity} 
                                setQuantity={setQuantity} 
                                product={product} 
                            />
                            
                            <div className={`card shadow-sm border-0 mt-4 ${styles.tabsCard}`}>
                                <div className="card-body p-4">
                                    <div className={styles.itemTabs}>
                                        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                                        <hr className={`my-4 ${styles.hrTabs}`} />
                                        <div className="tab-content mt-3">
                                            {activeTab === 0 && <TabInfoOne fullDescription={fullDescription} />} 
                                            {activeTab === 1 && (
                                                <TabInfoTwo 
                                                    brand={brand} 
                                                    productType={productType} 
                                                    productWidth={productWidth} 
                                                    productHeight={productHeight} 
                                                    productThickness={productThickness}
                                                    category={category}
                                                    title={title}
                                                    applying={applying}
                                                />
                                            )}
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            
                            <div className="text-center mt-4">
                                <button 
                                    className={`btn btn-outline-secondary ${styles.backButton}`} 
                                    onClick={() => navigate(-1)}
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Вернуться назад
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopItemDetails;