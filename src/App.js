import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div>
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
