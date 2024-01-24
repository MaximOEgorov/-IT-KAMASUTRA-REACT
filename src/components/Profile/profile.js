import React from "react";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile