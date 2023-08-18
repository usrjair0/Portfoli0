import styles from './Projects.module.css';
import ButtonB from '../elements/ButtonB';
import Card from '../elements/Card';
import ccxpDNC from '../images/ccxpDNC.png';
import projetoNLW from '../images/projetoNLW.png';
import ecommercjs from '../images/Ecommercjs.png'

function Projects (){
    return (
        <div className={styles.projects} id="Projects"> 
            <h1>Projetos</h1>
            <Card
            img={ccxpDNC}
            title='CCXP DNC' 
            tech='Html, CSS e Javascript'
            description=
            'O projeto é uma página interativa com algumas funções em javascript, como por exemplo, um countdown.'
            repo='https://github.com/usrjair0/CCPX_DNC' 
            site='https://ccxpdnc.vercel.app/'
            />
            <Card
            img={projetoNLW}
            title='Cápsula do tempo' 
            tech='Html, CSS e javascript' 
            description='O projeto consiste em uma máquina do tempo, na qual posso contar minha trajetória na programação'
            repo='https://github.com/usrjair0/NLW-SpaceTime' 
            site='https://usrjair0.github.io/NLW-SpaceTime/'
            />
            <Card
            img={ecommercjs}
            title='Ecommerc' 
            tech='react, sass'
            description=
            'O projeto consiste em um site de e-commerc que utiliza rotas dinâmicas'
            repo='https://github.com/usrjair0/E-commerc' 
            site='https://e-commerc-blue.vercel.app/'
            />
            
        </div>
    )
}
export default Projects;