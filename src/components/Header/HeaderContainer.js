import React from "react";
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
            /*usersAPI.authMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, loginSubmit, email} = response.payload;
                    this.props.setAuthUserData(id, email, loginSubmit);
                }
            });*/
    };

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);