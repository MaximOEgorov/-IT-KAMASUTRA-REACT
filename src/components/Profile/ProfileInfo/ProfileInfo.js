import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatus from "./ProfileStatus.js"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>

        )
    }
}

export default ProfileInfo