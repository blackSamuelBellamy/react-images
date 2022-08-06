const footerText = 'Página diseñada por Alejandro Quiñones, Todos los derechos reservados.';

const FooterLayout = () => {
    return (
        <div className = 'footer'>
            <span className="imagen"></span>
            <p className="parrafoFooter">{footerText}</p>
        </div>
    );
}


 window.addEventListener('scroll', () =>{
    document.querySelector('.imagen').style.opacity = `${window.scrollY / 1350}`;
    document.querySelector('.parrafoFooter').style.opacity = `${window.scrollY / 1350}`;
}) 

export default FooterLayout;