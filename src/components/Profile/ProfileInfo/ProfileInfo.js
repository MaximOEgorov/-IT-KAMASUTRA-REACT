import React from "react";
import Preloader from "../../common/Preloader/Preloader";

let ProfileInfo = (props) => {
    console.log('props: ' + JSON.stringify(props))
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
                </div>
            </div>

        )
    }
}

export default ProfileInfo