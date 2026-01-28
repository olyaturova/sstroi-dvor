import axios from 'axios';
import { API_ENDPOINTS } from '@/shared/api/constants'; // ← Импорт констант

// Создаем axios инстанс
const api = axios.create({
    baseURL: API_ENDPOINTS.AUTH.replace('/auth', ''), // ← Используем константу
    timeout: 10000,
});

// Добавляем интерцепторы для обработки ошибок
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            // Обработка неавторизованного доступа
            console.error('Auth error:', error.response.status);
            localStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

export const shopService = {
    async getAllProducts() {
        try {
            const response = await api.get('/shop');
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    async getProductById(id) {
        try {
            const response = await api.get(`/shop/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    },

    async createProduct(productData) {
        try {
            const formData = new FormData();
   
            if (productData.image) {
                formData.append('image', productData.image);
            }
     
            Object.keys(productData).forEach(key => {
                if (key !== 'image') {
                    formData.append(key, productData[key]);
                }
            });

            const response = await api.post('/shop', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    async updateProduct(id, productData) {
        try {
            const formData = new FormData();
            
            if (productData.image) {
                formData.append('image', productData.image);
            }
            
            Object.keys(productData).forEach(key => {
                if (key !== 'image') {
                    formData.append(key, productData[key]);
                }
            });

            const response = await api.put(`/shop/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            return response.data;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },

    async deleteProduct(id) {
        try {
            const response = await api.delete(`/shop/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },

    // Дополнительные методы (опционально)
    async searchProducts(query) {
        try {
            const allProducts = await this.getAllProducts();
            return allProducts.filter(product => 
                product.name?.toLowerCase().includes(query.toLowerCase()) ||
                product.category?.toLowerCase().includes(query.toLowerCase())
            );
        } catch (error) {
            console.error('Error searching products:', error);
            throw error;
        }
    },

    async getProductsByCategory(category) {
        try {
            const allProducts = await this.getAllProducts();
            return allProducts.filter(product => product.category === category);
        } catch (error) {
            console.error('Error fetching products by category:', error);
            throw error;
        }
    }
};

// Экспорт для обратной совместимости
export { API_ENDPOINTS };
export default api;