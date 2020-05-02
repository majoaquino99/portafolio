import React from 'react';
import styles from './styles/Social.module.css';
import gitHubIcon from '../images/gitHub-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import mailIcon from '../images/mail-icon.png';

const Social = () => {
    return(
        <div className= {styles.media}>
          <a href="https://www.linkedin.com/in/mariajoseaquino/" target="_blank" rel="noopener noreferrer">
           <img className={styles.icon} src={linkedInIcon} alt = 'Linkedin Icon'/>
          </a>
          <a href="https://github.com/majoaquino99" target="_blank" rel="noopener noreferrer">
           <img className={styles.icon} src={gitHubIcon} alt = 'Github Icon'/>
          </a>
          <a href="https://www.instagram.com/majo__aquino/" target="_blank" rel="noopener noreferrer" >
           <img className={styles.icon} src={instagramIcon} alt = 'Instagram Icon'/>
          </a>
          <a href="mailto:mariajose.aqh@gmail.com">
           <img className={styles.icon} src={mailIcon} alt= 'Mail Icon'/>
          </a>
        </div>
    )

};

export default Social;