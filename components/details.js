import styles from '../styles/Figure.module.css';
import Images from './images';

export default function Details({photos, title, text}) {

    return (

        <div className={styles.figure}>

            <Images src={photos} alt="Images" />

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.description}>{text}</div>

        </div>

    );
}
