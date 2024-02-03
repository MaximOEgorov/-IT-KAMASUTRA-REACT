import { NavLink } from "react-router-dom";
import Dialogs from "../Dialogs/dialogs";
import s from "./navbar.module.css"

const Navbar = (props) => {
    return (
        <nav>
            <div className={s.appWrapperContent}>
                <div>
                    <NavLink to="/users">Users</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
