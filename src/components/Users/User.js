import React from "react";
import styles from "./users.module.css"
import person from "./../../assets/person.png"
import {NavLink} from "react-router-dom";

let User = ({user, isFollowingProgress, follow, unfollow, ...props}) => {
    return (<div>
            <span>
                  <div>
                       <NavLink to={'/profile/' + user.id}>
                       <img src={user.photos.small != null ? user.photos.small : person} alt=""
                            className={styles.userPhoto}/>
                       </NavLink>
                  </div>
                  <div>
                            {user.followed ? <button disabled={isFollowingProgress.some(id => id === user.id)}
                                                     onClick={() => {
                                                         unfollow(user.id)
                                                     }}>Unfollow</button> :
                                <button disabled={isFollowingProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            follow(user.id)
                                        }}>Follow</button>}
                  </div>
            </span>
        <span>
            <div>
                 {user.name}
            </div>
            <div>
                 {user.status}
            </div>
        </span>
        <span>
            <div>{/*{user.location.city}*/}</div>
            <div>{/*user.location.country*/}</div>
        </span>
    </div>)
}

export default User;
