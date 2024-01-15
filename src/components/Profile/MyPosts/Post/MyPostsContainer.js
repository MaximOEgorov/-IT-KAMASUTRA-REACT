import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        },
        updateNewTextActionCreator: (text) => {
            updateNewTextActionCreator(text)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyPosts)