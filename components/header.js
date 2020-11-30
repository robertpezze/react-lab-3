import styles from '../styles/Layout.module.css';

export default function Header() {

    return (

        <header className={styles.header}>

            <h1 className={styles.title}>
                <img src="/logo.png" alt="CarvedLife" /> Welcome to CarvedLife
            </h1>

            <p className={styles.description}>
                Enjoy some of my artwork!
            </p>

        </header>

    );
}
