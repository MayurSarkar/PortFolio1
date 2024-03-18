import React from 'react';
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>I'm Mayur Sarkar!</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with expertise in React, ExpressJS, MongoDB,
                    NodeJS, MySQL and LARAVEL. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:pabitrasarkar1964@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")}
                alt="Hero"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero