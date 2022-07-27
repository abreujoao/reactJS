export default function Card(props){
    return (
        <div className="card">
            <h2> {props.titulo}</h2>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}