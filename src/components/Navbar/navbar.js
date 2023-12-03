import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/dialogs";
import s from "./navbar.module.css"

const Navbar = (props) => {
    return (
        <nav>
            <div className={s.appWrapperContent}>
                <div>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
