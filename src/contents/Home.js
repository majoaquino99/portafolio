import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import styles from './styles/Home.module.css';

const Home = () => {
    return(
        <div className = {styles.home}>
                <ReactTypingEffect 
                    className= {styles.title}
                    text={['Hello, I´m Majo Aquino','I am a jr front-end developer', 'welcome to my portafolio']} 
                    speed={100} 
                    eraseDelay={600}                             
               />              
            <Social />
        </div>
    )
}

export default Home;