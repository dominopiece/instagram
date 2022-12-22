import React from "react";

function Post({ post }) {
    const { id, caption, location, photo } = post;
    return (
    <div key={id}>
        {/* {id}, */}
        { caption }, { location }
        <img src={ photo } alt={ caption } style={{ width: '100px' }}/>
    </div>
    )
}

export default Post