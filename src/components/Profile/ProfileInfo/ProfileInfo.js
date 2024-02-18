import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/person.png"
import styles from "../profile.module.css"

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                Профиль пользователя {profile.fullName} (id: {profile.userId})
            </div>
            <div>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner &&
                    <div>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                    </div>}
                <div>
                    <div>
                        <b>Full name:</b> {profile.fullName};
                    </div>
                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"};
                    </div>
                    {profile.lookingForAJob &&
                        <div>
                            <b>My professional skills:</b> {profile.lookingForAJobDescription};
                        </div>}
                    <div>
                        <b>About me:</b> {profile.aboutMe};
                    </div>
                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })};
                    </div>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo