import React from "react";
import "./article.css"

const Article = ({src, imageName, date, title}) => {
    return (
        <div className="gpt3__article">
            <div className="gpt3__article-img">
                <img src={src} alt={imageName} />
            </div>
            <div className="gpt3__article-text">
                <div className="gpt3__article-text_header">
                    <p>{date}</p>
                    <h5>{title}</h5>
                </div>
                <p>Read Full Article </p>
            </div>
        </div>
    )
}
export default Article;