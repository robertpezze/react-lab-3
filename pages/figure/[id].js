import Head from 'next/head';
import styles from '../../styles/Figure.module.css';
import { useRouter } from 'next/router';
import { useEffect} from 'react';
import Nav from '../../components/nav';
import Layout from '../../components/layout';
import Details from '../../components/details';


export default function Figure(props) {

    let {id, photos, title, text, next} = props;

    const router = useRouter();

    useEffect(() => {

        //If no image, go to first
        if (!id) {
            router.push('/figure/1');
        }

    }, []);

    return (
        <Layout>

            <Head>
                <title>{title} by CarvedLife</title>
            </Head>

            <main className={styles.main}>

                <Details photos={photos} title={title} text={text} />

                <Nav id={id} next={next} />

            </main>

        </Layout>
    );
}


// This function gets called at build time
export async function getStaticPaths() {

    const res     = await fetch('http://insta.heby.nu');
    const figures = await res.json();

    const paths = figures.map((figure) => `/figure/${figure.id}`);

    return {paths, fallback: true};
}

// This also gets called at build time
export async function getStaticProps({params}) {

    const res    = await fetch(`http://insta.heby.nu?id=${params.id}`);
    const figure = await res.json();

    return {props: {...figure}};
}

