import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils';


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("hero/Avatar_3.png")}
                alt="About image"
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I'm a Backend developer with experience in developing fast and optimized backend system and APIs</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>UI Developer</h3>
                            <p>I'm a ui designer</p>
                        </div>
                    </li>
                </ul>            
            </div>

        </section>

    );
};