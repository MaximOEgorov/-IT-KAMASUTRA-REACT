import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";
import Profile from "./components/Profile/profile";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" Component={Dialogs}/>
                        <Route path="/profile" Component={Profile}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
