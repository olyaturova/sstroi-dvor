// LoaderPage.jsx
import { Loader } from './loader';
import styles from './Loader.module.scss';

export const LoaderPage = () => {
    return (
        <div className={styles.containerLoader}>
            <Loader />
        </div>
    );
};