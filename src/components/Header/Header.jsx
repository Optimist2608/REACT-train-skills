import { Link } from 'react-router-dom'; // <--- Добавьте эту строку
import './Header.css';

export const Header = () => {
    return (
        <header className="head container">
            <Link to="/" className="logo"> 
                <picture className="abito">
                    <source srcSet="/img/logo.avif" type="image/avif" />
                    <source srcSet="/img/logo.webp" type="image/webp" />
                    <img className="abito_pic" src="/img/logo.png" alt="abito" />
                </picture>
                <p className="logo_title">Abito</p>
            </Link>
            <nav className="nav_head">
                <a className="a_head" id="a_head1" href="#!">
                    Вход и регистрация
                </a>
                <button className="a_head a_head2" id="a_head3">Подать объявление</button>
                <svg className="burger" viewBox="0 0 30 30">
                    <path fill="none" d="M0 0h30v30H0z" />
                    <g fill="#000">
                        <path d="M29.062 14.063H.937a.938.938 0 0 0 0 1.874h28.125a.938.938 0 0 0 0-1.874ZM29.063 20.625h-18.75a.938.938 0 0 0 0 1.875h18.75a.938.938 0 0 0 0-1.875ZM.937 9.375h28.125a.938.938 0 0 0 0-1.875H.937a.938.938 0 0 0 0 1.875Z" />
                    </g>
                </svg>
            </nav>
        </header>
    )
}