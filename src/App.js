import './App.css';
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, {Component} from "react";
import {compose} from "redux";
import {state} from "./redux/store";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <Provider store={store}>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/loginSubmit" element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>
            </Provider>
        );
    }
}

function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()

        return <Component
            {...props}
            router={{location, navigate, params}}/>
    }

    return ComponentWithRouterProp
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
    ) (App);