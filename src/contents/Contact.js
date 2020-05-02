import React from 'react';
import Social from '../components/Social';

const Contact = () => {
    return(
        <div className = 'contact'>
            <h1>Contact</h1>
            <p className='contact-details'>
                I would love to work for you. Please, send me an email 
                and I´ll get back to you as soon as possible. 
            </p>
            <Social/>
        </div>
    )
}

export default Contact;