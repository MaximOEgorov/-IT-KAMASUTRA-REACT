import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App(props) {

    return (
        <Provider store={store}>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/users" element={<UsersContainer/>}/>
                        {/*<Route path="/dialogs" element={<DialogsContainer/>}/>*/}
                        {/*<Route path="/profile" element={<Profile/>}/>*/}
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default App;
