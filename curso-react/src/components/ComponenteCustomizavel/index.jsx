/*
const props = {
    saudacao: string;
    nome : string;
}
*/


export default function ComponenteCustomizavel(props){
    return(
        <div>
            <h2>{props.titulo}</h2>
            
            <p>{props.saudacao}{props.nome?.toUpperCase()}</p>
        </div>
    )
}