import styles from './Navbar.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav' //importanto do react bootstrap

function Navbar (){
    return(
        <div className={styles.navbar}>
            <ul className={styles.cont}>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/jairoo.jrr/'><FaInstagram size={40}/></a></li>
                <li><a href='https://github.com/usrjair0'><FaGithub size={40}/></a></li>
                <li><a href='https://www.linkedin.com/in/jairosilva1a/'><FaLinkedin size={40}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar