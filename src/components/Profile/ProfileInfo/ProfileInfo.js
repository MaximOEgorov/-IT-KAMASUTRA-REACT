import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatus from "./ProfileStatus.js"

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    Профиль пользователя {props.profile.fullName} (id: {props.profile.userId})
                </div>
                <div>
                    <img src={props.profile.photos.large}/>
                    <p>{props.profile.aboutMe}</p>
                    <ProfileStatus status={props.status}/>
                </div>
            </div>

        )
    }
}

export default ProfileInfo