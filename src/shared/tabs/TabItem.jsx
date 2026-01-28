import styles from './Tabs.module.scss';

export const TabItem = ({ tab, index, activeTab, setActiveTab }) => {
    const isActive = index === activeTab;
    
    return (
        <button
            className={`${styles.btnTabs} ${isActive ? styles.selected : ''}`}
            onClick={() => setActiveTab(index)}
            aria-selected={isActive}
            role="tab"
        >
            {tab}
        </button>
    );
};