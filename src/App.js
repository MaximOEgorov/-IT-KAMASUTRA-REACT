import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

function App(props) {

    return (
        <Provider store={store}>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/users"   element={<UsersContainer/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default App;
