import React from 'react';
import Social from '../components/Social';
import styles from './styles/Contact.module.css';

const Contact = () => {
    return(
        <div className = {styles.contact}>
            <h1>Contact</h1>
            <div className = {styles.info}>
                <p className={styles.contactDetails}>
                    I would love to work for you. 
                    <br/>
                    Please, send me an email 
                    and I´ll get back to you as soon as possible. 
                </p>
                <Social/>
            </div>
        </div>
    )
}

export default Contact;