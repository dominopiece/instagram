import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";

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
            {postList.map((post, index) => 
            <Post post={ post } key={ index } />
            )}
            
        </div>
    )

}

export default PostList;