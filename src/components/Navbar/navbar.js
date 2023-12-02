import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/dialogs";
import s from "./navbar.module.css"

const Navbar = (props) => {
    return (
        <BrowserRouter>
            <nav>
                <div className={s.appWrapperContent}>
                    Sample
                    <Routes>
                        <Route path="/dialogs" Component={Dialogs}/>
                        Profile
                    </Routes>
                </div>
            </nav>
        </BrowserRouter>
    );
}

export default Navbar
