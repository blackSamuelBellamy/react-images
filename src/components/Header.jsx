
const Header = (props) => {
    return (
        <div className = 'headerLayout'>
             <h1>{props.titulo}</h1>
        </div>
    );
}

const animationH1 = () => document.querySelector('h1').style.left = `-${window.scrollY * 4}px`;
window.addEventListener('scroll', animationH1)
export default Header;