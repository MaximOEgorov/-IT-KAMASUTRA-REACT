import {connect} from "react-redux"
import Users from "./Users.js";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer.js";
import React from "react";
import Preloader from "../common/Preloader/Preloader.js";
import {usersAPI} from "../../api/api.js";


class UsersContainer extends React.Component {
    componentDidMount() {
        getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        /*this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setUsersTotalCount(response.totalCount);
        });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items)
        });
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
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsersThunkCreator
    }
)(UsersContainer);