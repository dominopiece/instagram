import React, { useEffect, useState } from "react";
import Axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/posts/"

function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        console.log("mounted");
        Axios.get(apiUrl)
        .then(response => {
            const { data } = response
            console.log("loaded response :", response)
            setPostList(data);
        })     // 정상 동작
        .catch(error => {})    // 에러 
    }, [])
    return(
        <div>
            <h1>Post_List</h1>
            {postList.map(post => {
                const { id, caption, location, photo } = post;
                return (
                <div key={id}>
                    { caption }, { location }
                    <img src={ photo } alt={ caption } style={{ width: '100px' }}/>
                </div>
            )
            }
            )}
            
        </div>
    )

}

export default PostList;