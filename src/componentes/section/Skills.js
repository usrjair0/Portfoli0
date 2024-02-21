import styles from './Skills.module.css';

function Skills() {
    var corh1 = '#292424';
    return (
        <div id="Skills" className={styles.skill}>
            <h1 style={{ color: corh1 }}>Minhas Habilidades</h1>
            <p style={{ color: corh1 }}>Conheça um pouco sobre minhas principais habilidades.</p>
            <div className={styles.shields} >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt='html5' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt='CSS3' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='javascript' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt='git' />
            </div>
        </div>
    )
}
export default Skills;