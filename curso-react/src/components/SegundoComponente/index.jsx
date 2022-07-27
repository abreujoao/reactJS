import styles from "./SegundoComponente.module.css"


export default function SegundoComponente(){
    const nome = "João"

    return(
        <div>
            <h2 className={styles.red}>Segundo Nome 🐱‍🐉</h2>
            <p>Oi, meu nome é {nome.toUpperCase()}</p>
        </div>

    );
}