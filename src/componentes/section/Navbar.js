import styles from './Navbar.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

function Navbar (){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li><FaInstagram size={40}/></li>
                <li><FaGithub size={40}/></li>
                <li><FaLinkedin size={40}/></li>
            </ul>
        </div>
    )
}
export default Navbar