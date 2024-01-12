import React from "react";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPost";


const MyPostsContainer = (props) => {
    let state = props.props.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}   />)

}

export default MyPostsContainer