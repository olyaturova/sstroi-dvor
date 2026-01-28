import { TabItem } from "./TabItem";
import styles from './Tabs.module.scss';

export const Tabs = ({ activeTab, setActiveTab, tabs = ["ОПИСАНИЕ", "ДЕТАЛИ"] }) => {
    return (
        <div className={styles.allTabs}>
            {tabs.map((tab, index) => (
                <TabItem 
                    key={tab}
                    tab={tab}
                    index={index}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ))}
        </div>
    );
};