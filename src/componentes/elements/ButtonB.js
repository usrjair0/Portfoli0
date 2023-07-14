import styles from './ButtonB.module.css'
function ButtonB ({text, link, pag}) {
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
export default ButtonB;