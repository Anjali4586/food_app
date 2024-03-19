import React from 'react'
import './Footer.css';
import logo from  '../assets/assets/logo.png'
import facebook_icon from '../assets/assets/facebook_icon.png';
import linkedIn_icon from '../assets/assets/linkedin_icon.png';
import twitter_icon from '../assets/assets/twitter_icon.png';




const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className='footer-content-right'>
                <img src={logo} alt="logo"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem rerum officia doloribus voluptate aliquam dolores similique, rem consectetur commodi.</p>
            <div className="footer-social-icons">
                <img src={facebook_icon} alt="facebook"/>
                <img src={linkedIn_icon} alt="linkedIn"/>
                <img src={twitter_icon} alt="twitter"/>
            </div>
            
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               </ul>

            </div>
            <div className="footer-content-left">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+987-654-3210</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className='copyright'>Copyright 2024 @tomato.com- All Rights Reserved</p>

    </div>
  )
}

export default Footer