import styles from './Card.module.css';
import ButtonB from './ButtonB';

function Card({img, title, tech, description, repo, site}) {
    return(
        <div className={styles.card}>
                <a href={site} target='_blank'>
                    <img src={img} alt='projeto'/>
                </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB pag='_blank' link={repo} text='Acesse meu repositório'/>
            </section>
        </div>
    )
}
export default Card