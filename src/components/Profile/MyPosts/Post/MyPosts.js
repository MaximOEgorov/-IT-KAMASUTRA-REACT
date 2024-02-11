import React from "react";
import s from "./my-post.module.css";
import Post from "./Post";
import MyPostForm from "./MyPostForm";


class MyPosts extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state;
    }

    render() {
        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <MyPostForm {...this.props}/>
                {this.props.posts.map(p =>
                    <div key={p.id} className={s.posts}>
                        <Post message={p.message} likesCount={p.likesCount}/>
                    </div>
                )}
            </div>
        )
    }
}

export default MyPosts