import { useState, useEffect, useCallback } from 'react';

export const useScroll = (threshold = 300) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        if (window.pageYOffset > threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [threshold]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    return { isVisible, scrollToTop };
};