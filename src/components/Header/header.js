import logo from "../../logo.svg";
import s from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.App_header}>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login:</NavLink>
            </div>
        </header>
    );
}

export default Header