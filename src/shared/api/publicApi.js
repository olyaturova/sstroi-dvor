import axios from 'axios';
import { API_ENDPOINTS } from '@/shared/api/constants'; // ← Импорт констант

// Получаем BASE_URL из констант
const API_URL = `${API_ENDPOINTS.AUTH.replace('/auth', '')}`;

const publicApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicApi.interceptors.request.use((config) => {
  delete config.headers.Authorization;
  return config;
});

export const publicService = {
  async getAllProducts() {
    try {
      const response = await publicApi.get('/shop');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  
  // Дополнительные методы можно добавить позже
};

// Экспортируем для обратной совместимости
export { API_ENDPOINTS };