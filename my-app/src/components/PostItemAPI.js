import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            // Extra task destructuring 
            const {type, user, webformatURL, tags, id} = post
            return <div className={css.SearchItem} key={id}>
                <p>Title: {type}</p>
                <p>Author: {user}</p>
                <img src={webformatURL} alt="random"/>
                <p>{tags}</p>
            </div>
            }
        )
    )
}

export default PostItem