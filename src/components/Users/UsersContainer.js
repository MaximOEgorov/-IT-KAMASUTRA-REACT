import {connect} from "react-redux"
import Users from "./Users.js";
import {
    follow,
    requestUsers,
    setCurrentPage, toggleIsFollowingProgress, unfollow
} from "../../redux/users-reducer.js";
import React from "react";
import Preloader from "../common/Preloader/Preloader.js";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   isFollowingProgress={this.props.isFollowingProgress}
                   maxPages={this.props.maxPages}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getFollowingProgress(state)
    }
}

export default connect(mapStateToProps, {follow,unfollow,setCurrentPage,toggleIsFollowingProgress,getUsers: requestUsers})(UsersContainer);