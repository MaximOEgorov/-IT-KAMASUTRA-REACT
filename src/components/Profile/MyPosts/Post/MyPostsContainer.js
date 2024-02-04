import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost} from "../../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)