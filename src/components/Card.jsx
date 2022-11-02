import '../css/Card.css'

function Card(props) {
    return(
        <div className="container"> 
            <div className='card'>
                <img className="imagen" src={props.image} />
                <h4 className="titulo">{props.titulo}</h4>
                <p className="texto">{props.texto}</p>
                <a href="" target="_blank">Comprar</a>
            </div>
        </div>
    )
}

export default Card;