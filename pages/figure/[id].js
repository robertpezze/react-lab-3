import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Nav from '../../components/nav';
import Layout from '../../components/layout';
import Details from '../../components/details';

export default function Figure(props) {

    let {id, photos, title, text, next, votes} = props;

    const router = useRouter();

    //If no image, go to first
    useEffect(() => {

        if (!id) {
            router.push('/figure/1');
        }

    }, []);

    return (
        <Layout>

            <Head>
                <title>{title} by CarvedLife</title>
            </Head>

            <Details id={id} photos={photos} title={title} text={text} votes={votes} />

            <Nav id={id} next={next}/>

        </Layout>
    );
}

// This function gets called at build time
export async function getStaticPaths() {

    const res     = await fetch('https://insta.heby.nu');
    const figures = await res.json();

    const paths = figures.map((figure) => `/figure/${figure.id}`);

    return {paths, fallback: false};
}

// This also gets called at build time
export async function getStaticProps({params}) {

    const res    = await fetch(`https://insta.heby.nu?id=${params.id}`);
    const figure = await res.json();

    return {props: figure};
}

