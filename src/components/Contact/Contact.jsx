import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact=() =>{
    return (
        <footer id="contact"
        className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/emailIcon.png")}
                    alt="Email Icon"/>
                    <a href="mailto:bhtheja2002@gmail.com">bhtheja2002@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="Email Icon"/>
                    <a href="https://www.linkedin.com/in/theja-bh">linkedin.com/in/theja-bh</a>
                </li>
                <li className={styles.link}>
                    <img 
                    src={getImageUrl("contact/githubIcon.png")}
                    alt="Email Icon"/>
                    <a href="https://www.github.com/thejabh">github.com/thejabh</a>
                </li>
            </ul>
        </footer>
    );
}




