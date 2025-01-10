import './style.css';
import logo from './images/William.jpg'
const Header = () => {
    return (
        <div className="Wraper">
            <div className="Image">
                <img src={logo} alt="" width={450} height={450} />
            </div>
            <h1>William Shakespeare</h1>
        </div>
    );

}

export default Header;