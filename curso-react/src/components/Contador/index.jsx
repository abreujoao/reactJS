import { useState } from "react";

export default function Contador(props){
    const [contador, setContador] = useState(props.valorInicial);
    const [valorInput, setValor] = useState(13);

    function incrementar(){
        setContador(contador + valorInput);
    }

    function decrementar(){
        setContador(contador - valorInput);
    }

    return(
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={decrementar}>-</button>
            <input type="text" value={valorInput} onChange={e => setValor(+e.target.value)} />
            <button onClick={incrementar}>+</button>
        </>
    );
}