import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Thumb({id, photos}) {

    return (

        <div className={styles.figure}>
            <Link href={'/figure/' + id}>
                <a>
                    <img src={photos[0]} alt="image"/>
                </a>
            </Link>
        </div>

    );
}
