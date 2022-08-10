
import '../componentsCss/Card.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'; 

const cards = document.querySelectorAll('.card');
const LenguajesCards = (props) => {
    return (
        <div className='card bg-dark text-light'>
            <div className="imgContainer">
                <img src={props.img} alt = {props.nombre} className="card-img-top" />
            </div>

            <div className='card-body text-center'>
                <h4 className='card-title'>{props.nombre}</h4>
                <p className='card-text'>{props.texto}</p>
                <Button variant ='secondary text-light'>
                    <Alert.Link href = {props.direccion} className = 'textoBoton' >Official Site</Alert.Link>
                </Button>
    
            </div>
        </div>
    );
}


window.addEventListener('scroll', () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = `${window.scrollY / 1000 * 1.5}`
    }
})
export default LenguajesCards;