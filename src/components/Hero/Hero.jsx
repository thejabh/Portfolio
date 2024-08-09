import React from 'react';
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';


export const Hero=() =>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Theja</h1>
            <p className={styles.description}>Aspiring full-stack developer with a passion for real-time applications and machine learning.</p>
            <div className={styles.buttons}>
                <a href="mailto:bhtheja2002@gmail.com" className={styles.contactBtn}>Contact Me</a>
                <a href="https://thejabh.github.io/Portfolio/Resume/Theja_BH_Resume.pdf" download="Theja_B_H_Resume.pdf" className={styles.resumeBtn}>
                Resume
                <img
                    src={getImageUrl('hero/downloadIcon.png')}
                    alt="Download Icon"
                    className={styles.resumeDownloadBtn}
                />
                </a>
            </div>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/Avatar_1.jpeg")} alt="Hero Image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    
    );
};
