import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA.js';
import ButtonB from '../elements/ButtonB.js';

function Presentation (){
    return (
        <div className={styles.presentation} id="Presentation"> 
            <h2>Bem-vindo</h2>
            <h1>
                Olá, me chamo Jairo!
            </h1>
            <p>
                Sou estudante de engenharia de software blalbalalablbl<br/>
                safjkasfkjsafas<br/>
                sajgfnkasgnskgjasgçlksaglasgkagslç<br/>
            </p>
            <ButtonA pag='_blank' link='https://www.linkedin.com/in/jairosilva1a/' text='Conecte-se comigo'/>
        </div>
    )
}
export default Presentation;