import { API_ENDPOINTS } from '@/shared/api/constants';

export const formatCartItem = (product, quantity = 1) => {
    return {
        id: Date.now().toString(),
        productId: String(product._id || product.id),
        productName: product.name || product.title || 'Без названия',
        productImg: API_ENDPOINTS.getImageUrl(
            product.image || product.productImg || product.imageUrl || ''
        ),
        productPrice: product.price || 0,
        quantity,
        totalPrice: quantity * (product.price || 0),
    };
};

export const calculateItemTotal = (price, quantity) => {
    return +(price * quantity).toFixed(2);
};

export const validateCartItem = (item) => {
    return item && 
           item.productId && 
           item.productPrice > 0 && 
           item.quantity > 0;
};