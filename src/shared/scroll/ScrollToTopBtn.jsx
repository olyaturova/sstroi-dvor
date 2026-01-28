import React from 'react';
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { useScroll } from './useScroll'; 

export const ScrollToTopBtn = () => {
    const { isVisible, scrollToTop } = useScroll();

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    aria-label="Scroll to top"
                    className="scroll-top-btn"
                >
                    <TbSquareRoundedArrowUpFilled className="topBtn-icon" />
                </button>
            )}
        </div>
    );
};