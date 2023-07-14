import styles from './Projects.module.css';
import ButtonB from '../elements/ButtonB';
import Card from '../elements/Card';

function Projects (){
    return (
        <div className={styles.projects} id="Projects"> 
            <h1>Projetos</h1>
            <Card/>
            <Card/>
            <Card/>
            <ButtonB pag='_blank' link='https://www.google.com.br/' text='Acesse meu repositório'/>
        </div>
    )
}
export default Projects;