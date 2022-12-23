import React from "react";
import { Card } from "antd"
import "./SuggestionList.scss"
import Suggestion from "./Suggestion";

const SuggestionList = ({ style }) => {
   return(
    <div style={ style }>
        <div>
            <Card title="Suggestion for you" size="small">
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
                <Suggestion />
            </Card>
        </div>
    </div>
   ) 
}

export default SuggestionList