import React from 'react';
import profile from '../images/profile.jpg';

const About = () => {
    return(
        <div className = 'about'>
            <article className="about">
                <p>ABOUT ME</p>
                <br />  
                <div className="about-content about-content-desk">
                    <img
                        className="about-img about-img-desk"
                        src={profile}
                        alt= 'Profile' 
                    />
                    <div className="text-img">
                        <p className="about-text">
                        I’m María José, I´m 20 years old, and an intuitive, innovative, 
                        auto sufficient, and creative person.  Front End Developer Jr with knowledge
                        in visual arts, fashion design, and culinary arts. I have a thrive for knowledge
                        and creating new things, which has led me to know "a little of everything".

                        When deciding what career I wanted to pursue, I wrongly believed that nothing 
                        in the area of technology could go hand-in-hand with my forte: creativity.
                        But later on, I found out that the sensibility, attention to detail, and design
                        skills I had only added up to the most important tools I would use as a Front End
                        Developer. 

                        I’m quick-minded, adaptable to new environments, engaging, and quick on my feet.
                        I’m here for the opportunity to learn more about technology and contribute to an
                        innovative and creative perspective in this field. One of my greatest desires is
                        to someday migrate to UX/UI Design or why not, become an Ethical Hacker.
                        </p>
                    </div>
                </div>
             </article>
        </div>
    )
}

export default About;