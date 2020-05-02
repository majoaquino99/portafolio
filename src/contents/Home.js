import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import styles from './styles/Home.module.css';

const Home = () => {
    return(
        <div className = {styles.home}>
                <ReactTypingEffect 
                    className= {styles.title}
                    text={['I´m Majo Aquino','I am a jr front-end developer']} 
                    speed={100} 
                    eraseDelay={700}                             
               />              
            <Social />
        </div>
    )
}

export default Home;