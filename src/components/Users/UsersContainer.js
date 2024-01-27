import {connect} from "react-redux"
import Users from "./Users.js";
import {
    follow, getUsers,
    setCurrentPage, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer.js";
import React from "react";
import Preloader from "../common/Preloader/Preloader.js";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   maxPages={this.props.maxPages}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        maxPages: state.usersPage.maxPages,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }
)(UsersContainer);