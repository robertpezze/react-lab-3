import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

export default function Layout(props) {

    return (

        <div className={styles.container}>
            <Head>
                <title>Art By CarvedLife</title>
                <link rel="icon" type="image/png" href="/logo.png" />
            </Head>

            <main className={styles.main}>

                <Header />
                {props.children}

            </main>

            <Footer />
            <ToastContainer />

        </div>

    );
}
