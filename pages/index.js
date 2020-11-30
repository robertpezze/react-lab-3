import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Thumb from '../components/thumb';
import React from 'react';

export default function Home({figures}) {

    return (

        <Layout>

            <div className={styles.grid}>
                {figures.map(figure => (

                    <Thumb key={figure.id} id={figure.id} photos={figure.photos} />

                ))}
            </div>

        </Layout>

    );
}

// This also gets called at build time
export async function getStaticProps() {

    const res     = await fetch(`http://insta.heby.nu`);
    const figures = await res.json();

    return {props: {figures}};
}
