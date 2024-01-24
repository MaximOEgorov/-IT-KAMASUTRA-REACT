import React from "react";
import Profile from "./Profile.js";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from 'react-router-dom'

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userIdFromPath = this.props.router.params.userId;
        if (!userIdFromPath) {
            userIdFromPath = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userIdFromPath)
            .then(response => {
                console.log('data: '+JSON.stringify(response.data))
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

// wrapper to use react router's v6 hooks in class component (to use HOC pattern, like in router v5)
function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()

        return <Component
            {...props}
            router={{location, navigate, params}} />
    }

    return ComponentWithRouterProp
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);