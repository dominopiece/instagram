import React from "react";
import { Card } from "antd"
import "./StoryList.scss"

const StoryList = ({ style }) => {
    return(
        <div style={ style }>
            <Card title="Stories" size="small">
                card test
            </Card>
        </div>
    )
}

export default StoryList