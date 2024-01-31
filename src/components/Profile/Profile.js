import React from "react";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile