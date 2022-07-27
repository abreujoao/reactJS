import styles from "./Card.module.css";

export default function Card(props) {
    console.log(props.titulo);

    if(!props.titulo){
        return <h2>Não foi possivel carregar o card</h2>
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{ !!props.titulo ? props.titulo : "Nenhum título foi informado"}</h2> 
            {/* {
                // Renderização condicional
                // !!props.titulo && <h2 className={styles.title}>{props.titulo}</h2>

                // Renderização condicional utilizando operador ternário
                !!props.titulo 
                    ? <h2 className={styles.title}>{props.titulo}</h2> 
                    : <p>Sem titúlo</p>
            } */}
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}