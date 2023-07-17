import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA.js';
import avatar from '../images/avatar_no_back.png'
import {useEffect, useState} from 'react'

function Presentation (){
    const [text, settext] = useState('');
    const toRotate = ['Me chamo Jairo!', 'Sou Desenvolvedor Front End', 'Sou Desenvolvedor web']; 
    const [loop, setloop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const period = 100;
    const [delta, setdelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text]);
    const toType = () =>{
        let i = loop % toRotate.length; // isso limita meu i a um valor entre 0 e 2 no máximo
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        settext(updatedText);
        if(!isDeleting && updatedText=== fullText){
            setisDeleting(true);
            setdelta(period)
        }else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setdelta(period);
            setloop(loop + 1);
        }
    }


    return (
        <div className={styles.presentation} id="Presentation"> 
            <div className={styles.infos}>
            <h2>Bem-vindo!</h2>
            <h1>
                {text}
            </h1>
            <p>
                Sou estudante de engenharia de software e desenvolvedor Front-end<br/>
                Estou sempre aprendendo e me desafiando, buscando sempre melhorar<br/>
                e me aprofundar nesse universo tão vasto que é o desenvolvimento web.<br/>
                Nesta página você terá acesso a alguns dos meus projetos e poderá <br/>
                entrar em contato comigo se estiver interessado em conversar.<br/>
                
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