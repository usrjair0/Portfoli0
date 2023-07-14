import styles from './Projects.module.css';
import ButtonB from '../elements/ButtonB';
import Card from '../elements/Card';
import ccxpDNC from '../images/ccxpDNC.png';
import projetoNLW from '../images/projetoNLW.png';

function Projects (){
    return (
        <div className={styles.projects} id="Projects"> 
            <h1>Projetos</h1>
            <Card
            img={ccxpDNC}
            title='CCXP DNC' 
            tech='Html, CSS e Javascript'
            description=
            'descrição projeto blablalblablablab'
            repo='https://github.com/usrjair0/CCPX_DNC' 
            site='https://ccxpdnc.vercel.app/'
            />
            <Card
            img={projetoNLW}
            title='Cápsula do tempo' 
            tech='' 
            description=''
            repo='' 
            site=''
            />
            <Card
            img={ccxpDNC}
            title='' 
            tech='' 
            description=''
            repo='' 
            site=''
            />
            <ButtonB pag='_blank' link='https://www.google.com.br/' text='Acesse meu repositório'/>
        </div>
    )
}
export default Projects;