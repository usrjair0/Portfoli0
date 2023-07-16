import styles from './Card.module.css';
import ButtonB from './ButtonB';
import {useState} from 'react'

function Card({img, title, tech, description, repo, site}) {
    const [info, setinfo] = useState(false)
    function infoon(){
        setinfo(true)
    }

    return(
        <div className={styles.card}>
            <a onMouseEnter={infoon} href={site} target='_blank'>
                <img src={img} alt='projeto'/>
            </a>
            {info === true &&(
                <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB pag='_blank' link={repo} text='Acesse meu repositório'/>
            </section>
            )}
            
        </div>
    )
}
export default Card