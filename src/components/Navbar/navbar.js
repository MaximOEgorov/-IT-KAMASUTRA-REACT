import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/dialogs";
import s from "./navbar.module.css"

const Navbar = (props) => {
    return (
        <nav>
            <div className={s.appWrapperContent}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
        </nav>
    );
}

export default Navbar
