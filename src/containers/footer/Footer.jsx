import React from "react";
import logo from '../../assets/logo.svg'
import "./footer.css"
const Footer = () => {
    return (
        <div className="gpt3__footer">
            <div className="gpt3__footer-header">
                <h2 className="gradient__text">Do you want to step in to the future before others</h2>
                <p><a href="#request">Request Early Access</a></p>
            </div>
            <div className="gpt3__footer-content">
                <div className="gpt3__footer-content_logo">
                    <div className="gpt3__footer-content_logo-img">
                        <img src={logo} alt='logo' />
                    </div>
                    <p>Crechterwoord K12 182 DK Alknjkcb,<br/> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-content_infos">
                    <div className="gpt3__footer-content_infos-links">
                        <h6>Links</h6>
                        <p><a href="#link">Overons</a></p>
                        <p><a href="#link">Social Media</a></p>
                        <p><a href="#link">Counters</a></p>
                        <p><a href="#link">Contact</a></p>
                    </div>
                    <div className="gpt3__footer-content_infos-company">
                        <h6>Company</h6>
                        <p><a href="#link">Terms & Conditions</a></p>
                        <p><a href="#link">Privacy Policy</a></p>
                        <p><a href="#link">Contact</a></p>
                    </div>
                    <div className="gpt3__footer-content_infos-contact">
                        <h6>Get in touch</h6>
                        <p><a href="#link">Crechterwoord K12 182 DK Alknjkcb</a></p>
                        <p><a href="#link">085-132567</a></p>
                        <p><a href="#link">info@payme.net</a></p>
                    </div>
                </div>
            </div>
            <div className="gpt3__footer-bottom">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;