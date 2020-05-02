import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import headerpicture from '../images/headerpicture.jpg';
import Social from '../components/Social';

const Home = () => {
    return(
        <div className = 'Home'>
           <h1>Majo Aquino</h1>
           {/*  <ReactTypingEffect 
             className="typingeffect"
             text={['I´m Majo Aquino','I am a jr front-end developer']} 
             speed={100} 
             eraseDelay={700}/> */}
            <img src = {headerpicture} alt='Home-background'></img>
            <Social />
        </div>
    )
}

export default Home;