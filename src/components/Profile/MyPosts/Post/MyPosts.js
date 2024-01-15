import React from "react";
import s from "./my-post.module.css";
import Post from "./Post";


const MyPosts = (props) => {
//    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostActionCreator();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewTextActionCreator(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="30"
                              rows="10"/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {props.posts.map(p =>
                <div key={p.id} className={s.posts}>
                    <Post message={p.message} likesCount={p.likesCount}/>
                </div>
            )}
        </div>
    )

}

export default MyPosts