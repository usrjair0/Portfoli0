import styles from './ButtonA.module.css'

function ButtonA ({text, link, pag}) {
    return(
        <div>
            <a href={link} target={pag}>
                <button className={styles.btn}>
                    {text}
                </button>
            </a>
        </div>
    )
}
export default ButtonA