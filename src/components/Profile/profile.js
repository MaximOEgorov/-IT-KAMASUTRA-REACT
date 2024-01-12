import React from "react";
import MyPostsContainer from "./MyPosts/Post/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <MyPostsContainer props={props.props} />
        </div>
    )
}

export default Profile