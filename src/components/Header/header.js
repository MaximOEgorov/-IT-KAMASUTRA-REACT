import logo from "../../logo.svg";
import s from "./header.module.css"

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    );
}

export default Header