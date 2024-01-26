import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {usersAPI} from "../../api/api.js";

class HeaderContainer extends React.Component {

    componentDidMount() {
            usersAPI.getMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);