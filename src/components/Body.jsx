import "../css/Body.css"
import VistaLibro from "./VistaLibro";
import image from '../assets/images/principito.png';

function Body(props) {
    return (
    <>
        <VistaLibro imagen={image} tema="El principito" subTema="El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad." />
    </>
    )
}

export default Body;