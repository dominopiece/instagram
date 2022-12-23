import React from "react";
import { Card, avatar, Avatar } from "antd";
import { HeartFilled, UserOutlined } from "@ant-design/icons"
import "./Post.scss"

function Post({ post }) {
    const { id, caption, location, photo } = post;
    return (
    <div key={id}>
        <Card hoverable cover={<img src={photo} alt={caption} />}
        actions={[<HeartFilled />]}
        >
            <Card.Meta avatar={<Avatar icon={<UserOutlined />} />} title={location} description={caption} />
        </Card>
        {/* {id}, */}
        {/* <img src={ photo } alt={ caption } style={{ width: '100px' }}/>
        { caption }, { location } */}
    </div>
    )
}

export default Post