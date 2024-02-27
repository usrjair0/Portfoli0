import styles from './Skills.module.css';
import css from '../images/icons/css.png';
import html from '../images/icons/html.png';
import git from '../images/icons/git.png';
import javascript from '../images/icons/javascript.png';
import react from '../images/icons/react.png';

function Skills() {
    var corh1 = '#292424';
    return (
        <div id="Skills" className={styles.skill}>
            <h1 style={{ color: corh1 }}>Minhas Habilidades</h1>
            <p style={{ color: corh1 }}>Conheça um pouco sobre minhas principais habilidades.</p>
            <div className={styles.shields} >
                <img src={html} alt='html5' />
                <img src={css} alt='CSS3' />
                <img src={javascript} alt='javascript' />
                <img src={react} alt='react' />
                <img src={git} alt='git' />
            </div>
        </div>
    )
}
export default Skills;