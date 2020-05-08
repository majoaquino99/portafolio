import React from 'react';
//import profile from '../images/profile.jpg';
import styles from './styles/About.module.css';

const About = () => {
    return(
         <article className= {styles.about}>
            <p>ABOUT ME</p>
            <div className={styles.aboutContent}>
                <img
                    className={styles.aboutImage}
                    src= 'https://i.postimg.cc/vmvSzX7W/2019-02-26-09-15-40-1-min.jpg'
                    alt= 'Profile' 
                />
                <div className={styles.text}>
                    <p className={styles.aboutText}>
                    I'm a 20 years old, intuitive, innovative, 
                    auto sufficient, and creative person.  Front End Developer Jr with knowledge
                    in visual arts, fashion design, and culinary arts. I have a thrive for knowledge
                    and creating new things, which has led me to know "a little of everything".
                    <br/><br/>
                    When deciding what career I wanted to pursue, I wrongly believed that nothing 
                    in the area of technology could go hand-in-hand with my forte: creativity.
                    But later on, I found out that the sensibility, attention to detail, and design
                    skills I had only added up to the most important tools I would use as a Front End
                    Developer. 
                    <br/><br/>
                    I’m quick-minded, adaptable to new environments, engaging, and a fast learner.
                    I’m here for the opportunity to learn more about technology and contribute to an
                    innovative and creative perspective in this field. One of my greatest desires is
                    to someday migrate to UX/UI Design or why not, become an Ethical Hacker.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default About;