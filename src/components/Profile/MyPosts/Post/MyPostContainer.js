import React, {useContext} from "react";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = (props) => {
    /*const {store, setStore} = useContext(StoreContext)
    let state = store.getState().profilePage;
    let addPost = () => {
        store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewTextActionCreator(text)
        store.dispatch(action)
    }*/

    return (
                <MyPosts />
    )
}

export default MyPostsContainer