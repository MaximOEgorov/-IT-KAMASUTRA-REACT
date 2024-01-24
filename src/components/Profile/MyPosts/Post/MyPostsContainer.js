import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostAC, updateNewTextAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostAC())
        },
        updateNewTextActionCreator: (text) => {
            updateNewTextAC(text)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyPosts)