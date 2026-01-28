import styles from './Tabs.module.scss';

export const TabInfoOne = ({ fullDescription }) => {
    return (
        <div className={styles.tabInfo}>
            <p className={styles.tabContent}>{fullDescription}</p>
        </div>
    );
};