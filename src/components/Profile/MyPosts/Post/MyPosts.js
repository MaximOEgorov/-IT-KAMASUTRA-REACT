import React from "react";
import s from "./my-post.module.css";
import Post from "./Post";
import MyPostForm from "./MyPostForm";


const MyPosts = React.memo(props => {
        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <MyPostForm {...props}/>
                {props.posts.map(p =>
                    <div key={p.id} className={s.posts}>
                        <Post message={p.message} likesCount={p.likesCount}/>
                    </div>
                )}
            </div>
        )

    }
)

export default MyPosts