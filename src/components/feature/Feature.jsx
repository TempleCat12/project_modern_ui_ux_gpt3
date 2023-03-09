import React from "react";
import "./feature.css"

const Feature = ({title, content}) => {
    return (
        <div className="gpt3__feature">
            <div className="gpt3__feature-header">
                <div></div>
                <h5>{title}</h5>
            </div>
            <div className="gpt3__feature-content">
                <p>{content}</p>
            </div>
        </div>
    )
}
export default Feature;