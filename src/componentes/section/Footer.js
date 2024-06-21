import styles from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer (){
    return (
        <div className={styles.footer}> 
            <ul>
                <li><a href='https://www.instagram.com/jairoo.jrr/' target='_blank'><FaInstagram size={29}/></a></li>
                <li><a href='https://github.com/usrjair0' target='_blank'><FaGithub size={29}/></a></li>
                <li><a href='https://www.linkedin.com/in/jairosilva1a/' target='_blank' ><FaLinkedin size={29}/></a></li>
            </ul>
            <p>
                juniorsilvasobrinho1999@gmail.com
            </p>
            <p>
                Jairo Silva @ 2023
            </p>
        </div>
    )
}
export default Footer;