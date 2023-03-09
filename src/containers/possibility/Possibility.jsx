import React from "react";
import possibility from "../../assets/possibility.png"
import "./possibility.css"
const Possibility = () => {
    return (
        <div className="gpt3__possibility">
            <div className="gpt3__possibility-img">
                <img src={possibility} alt='possibility' />
            </div>
            <div className="gpt3__possibility-container">
                <p><a href="#request">Request Early Access to Get Started</a></p>
                <h3 className="gradient__text">The possibilities are beyond your imagination</h3>
                <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p><a href="#request">Request Early Access to Get Started</a></p>
            </div>
        </div>
    )
}
export default Possibility;