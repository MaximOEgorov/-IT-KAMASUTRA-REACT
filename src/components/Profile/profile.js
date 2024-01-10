import React from "react";
import s from "./profile.module.css"

let newPostElement = React.createRef()

let addPostFunc = () => {
    let newText = newPostElement.current.value
    alert(newText)
}

const Profile = (props) => {
    return (
        <div className={s.ProfileBlock}>
            <h3>My profile</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostFunc}>
                        Add post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile