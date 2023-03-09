import React from "react";
import { Feature } from "../../components";
import "./features.css"
const Features = () => {
    return (
        <div className="gpt3__features">
            <div className="gpt3__features-header">
                <h3>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
                <p><a href="#request">Request Early Access to Get Started</a></p>
            </div>
            <div className="gpt3__features-container">
                <Feature 
                    title='Improving end distrusts instantly'
                    content='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
                />
                <Feature 
                    title='Become the tended active'
                    content='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
                />
                <Feature 
                    title='Message or am nothing'
                    content='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
                />
                <Feature 
                    title='Really boy law county'
                    content='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
                />
            </div>
        </div>
    )
}
export default Features;