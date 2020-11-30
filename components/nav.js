
import styles from '../styles/Figure.module.css';
import Link from 'next/link';

export default function Nav({id, next}) {

    return (

        <div className={styles.navigation}>

            {id > 1 && <Link href={'/figure/' + (id - 1)}><a>Previous</a></Link>}

            <Link href="/"><a>Home</a></Link>

            {next > 0 && <Link href={'/figure/' + (next)}><a>Next</a></Link>}

        </div>

    );
}
