import './App.css';
import Header from './components/Header';
import LenguajesCards from './components/Card';
import cardsContent from './components/Cards';
import FooterLayout from './components/Footer';
const mainTitle = 'Galería de imagenes con React';

function App() {
  return (
    <div className="MainContainer">
      <Header titulo = {mainTitle} />
      <div className='cardLayout pt-5'>
            <div className='container'>
                <div className='row gy-5'>
                    <div className='col-md-4'>
                        <LenguajesCards nombre={cardsContent[0].title} img={cardsContent[0].imagen}
                            texto={cardsContent[0].leyend} direccion={cardsContent[0].URL} />
                    </div>
                    <div className='col-md-4'>
                        <LenguajesCards nombre={cardsContent[1].title} img={cardsContent[1].imagen}
                            texto={cardsContent[1].leyend} direccion={cardsContent[1].URL} />
                    </div>
                    <div className='col-md-4'>
                        <LenguajesCards nombre={cardsContent[2].title} img={cardsContent[2].imagen}
                            texto={cardsContent[2].leyend} direccion={cardsContent[2].URL} />
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout />
    </div>
  );
}

export default App;
