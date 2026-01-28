import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { API_ENDPOINTS } from '@/shared/api/constants';
import { Loader } from '@/shared/ui/loader';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('adminToken'));
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState(null);

    const validateToken = useCallback((token) => {
        if (!token) return { isValid: false, payload: null };
        
        try {
            const decoded = jwtDecode(token);
            const isExpired = decoded.exp * 1000 < Date.now();
            const isAdminRole = decoded.role === 'admin';
            
            return {
                isValid: !isExpired && isAdminRole,
                payload: decoded
            };
        } catch (error) {
            console.error('Token decode error:', error);
            return { isValid: false, payload: null };
        }
    }, []);

    useEffect(() => {
        const checkToken = async () => {
            if (token) {
                const { isValid, payload } = validateToken(token);
                
                if (isValid) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    
                    try {
                        setIsAdmin(true);
                        setUserData(payload);
                    } catch (error) {
                        console.error('Token verification failed:', error);
                        logout();
                    }
                } else {

                    logout();
                }
            } else {
                delete axios.defaults.headers.common['Authorization'];
                setIsAdmin(false);
                setUserData(null);
            }
            
            setIsLoading(false);
        };

        checkToken();
        
        const interval = setInterval(() => {
            if (token) {
                const { isValid } = validateToken(token);
                if (!isValid) {
                    logout();
                }
            }
        }, 30000);
        
        return () => clearInterval(interval);
    }, [token, validateToken]);

    const login = async (username, password) => {
        try {
            const response = await axios.post(
                `${API_ENDPOINTS.AUTH}/login`, 
                { username, password }
            );
            
            const newToken = response.data.token;
            
            const { isValid, payload } = validateToken(newToken);
            
            if (isValid) {
                localStorage.setItem('adminToken', newToken);
                setToken(newToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                setIsAdmin(true);
                setUserData(payload);
                return true;
            } else {
                console.error('Invalid token received from server');
                return false;
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            return false;
        }
    };

    const logout = useCallback(() => {
        localStorage.removeItem('adminToken');
        setToken(null);
        setIsAdmin(false);
        setUserData(null);
        delete axios.defaults.headers.common['Authorization'];
    
    }, []);

    useEffect(() => {
        const responseInterceptor = axios.interceptors.response.use(
            response => response,
            async error => {
                if (error.response?.status === 401) {
                    logout();
                  
                }
                return Promise.reject(error);
            }
        );
        
        return () => {
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [logout]);

    if (isLoading) {
       <Loader />
    }

    return (
        <AuthContext.Provider value={{ 
            token, 
            isAdmin, 
            userData,
            login, 
            logout,
            validateToken: () => validateToken(token)
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};