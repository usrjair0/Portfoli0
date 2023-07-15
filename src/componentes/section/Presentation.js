import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA.js';
import avatar from '../images/avatar_no_back.png'

function Presentation (){
    return (
        <div className={styles.presentation} id="Presentation"> 
            <div className={styles.infos}>
            <h2>Bem-vindo!</h2>
            <h1>
                Me chamo Jairo!
            </h1>
            <p>
                Sou estudante de engenharia de software blalbalalablbl<br/>
                safjkasfkjsafas<br/>
                sajgfnkasgnskgjasgçlksaglasgkagslç<br/>
            </p>
            <ButtonA pag='_blank' link='https://www.linkedin.com/in/jairosilva1a/' text='Conecte-se comigo'/>
            </div>
            <div className={styles.imgsect}>
                <img src={avatar}></img>
            </div>
        </div>
    )
}
export default Presentation;