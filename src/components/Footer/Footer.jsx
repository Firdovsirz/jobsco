import React from 'react';
import "../Footer/Footer.css";
import Logo from "/src/assets/Footer/logo.webp";
import TwitterIcon from "/src/assets/Footer/twitter.svg";
import FacebookIcon from "/src/assets/Footer/facebook-f.svg";
import InstagramIcon from "/src/assets/Footer/instagram.svg";

export default function Footer() {
    return (
        <>
            <footer>
                <div className='footer-desc'>
                    <div>
                        <img src={Logo} alt="" />
                        <p>
                            The automated process starts as soon as your clothes go into the machine.The outcome is gleaming clothes.
                        </p>
                    </div>
                    <div className='footer-desc-social-medias'>
                        <a href="#"><img src={InstagramIcon} alt="instagram" /></a>
                        <a href="#"><img src={FacebookIcon} alt="facebook" /></a>
                        <a href="#"><img src={TwitterIcon} alt="" /></a>
                    </div>
                </div>
                <div className='footer-quick-links'>
                    <h3>Useful links</h3>
                    <ul>
                        <li>Design & creatives</li>
                        <li>Telecommunication</li>
                        <li>Restaurant</li>
                        <li>Programming</li>
                        <li>Architecture</li>
                    </ul>
                </div>
                <div className='footer-subscription'>
                    <h3>Subscribe Newsletter</h3>
                    <p>Subscribe newsletter to get updates about new jobs.</p>
                    <form>
                        <label htmlFor="email">
                            <input type="email" placeholder='  Enter your email' />
                        </label>
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            </footer>
        </>
    )
}
