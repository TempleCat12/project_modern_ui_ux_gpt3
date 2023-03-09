import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css"
const WhatGPT3 = () => {
    return (
        <div className="gpt3__wGPT3 gradient__wGPT3__bg">
            <div className="gpt3__wGPT3-header">
                <Feature 
                    title='What is GPT-3' 
                    content='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                />
            </div>
            <div className="gpt3__wGPT3-title">
                <h3>The possibilities are beyond your imagination</h3>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__wGPT3-features">
                <Feature 
                    title='Chat bots'
                    content='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
                />
                <Feature 
                    title='Knowledge base'
                    content='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
                />
                <Feature 
                    title='Education'
                    content='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'
                />
            </div>
        </div>
    )
}
export default WhatGPT3;