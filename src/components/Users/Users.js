import React from "react";
import styles from "./users.module.css"
import person from "./../../assets/person.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log('totalUsersCount : ' + props.totalUsersCount);
    console.log('pageSize : ' + props.pageSize);
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? styles.selectedPage : undefined}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>
                                {p + ', '}
                            </span>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : person} alt=""
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    usersAPI.deleteFollow(u.id).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                                }
                                }>Unfollow</button> :
                                <button onClick={() => {
                                    usersAPI.postFollow(u.id).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });
                                }
                                }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{/*{u.location.city}*/}</div>
                            <div>{/*u.location.country*/}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
