import styles from '../styles/Figure.module.css';
import Images from './images';
import React from 'react';
import Votes from './votes';

export default function Details({id, photos, title, text, votes}) {

    return (

        <div className={styles.figure}>

            <Votes id={id} votes={votes}/>
            <Images src={photos} alt="Images" />

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.description}>{text}</div>

        </div>

    );
}