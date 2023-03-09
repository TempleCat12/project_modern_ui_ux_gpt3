import React from "react";
import "./brand.css"
import { google, dropbox, shopify, slack, atlassian } from ".";

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <img src={google} alt='google' />
            <img src={dropbox} alt='dropbox' />
            <img src={shopify} alt='shopify' />
            <img src={slack} alt='slack' />
            <img src={atlassian} alt='atlassian' />
        </div>
    )
}
export default Brand;