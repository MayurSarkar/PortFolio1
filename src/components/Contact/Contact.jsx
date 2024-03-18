import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach Out to Me:</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                <a href="mailto:pabitrasarkar1964@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
                    <a id={styles.contacttext} href="mailto:pabitrasarkar1964@gmail.com">pabitrasarkar1964@gmail.com</a>
                </li>
                <li className={styles.link}>
                <a href="https://www.linkedin.com/in/mayur-sarkar-286523221/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" /></a>
                    <a id={styles.contacttext} href="https://www.linkedin.com/in/mayur-sarkar-286523221/">linkedin.com/in/mayur-sarkar-286523221</a>
                </li>
                <li className={styles.link}>
                <a href="https://github.com/MayurSarkar"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
                    <a id={styles.contacttext} href="https://github.com/MayurSarkar">github.com/MayurSarkar</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact