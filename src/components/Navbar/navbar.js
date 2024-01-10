import { NavLink } from "react-router-dom";
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
                <div>
                    <NavLink to="/messages">Messages</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
