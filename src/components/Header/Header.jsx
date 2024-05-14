import React from 'react';
import "../Header/Header.css";
import Logo from "/src/assets/Header/logo.webp";

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className='header-pages'>
                        <img src={Logo} alt="logo" />
                        <ul>
                            <li>HOME</li>
                            <li>BROWSE JOBS</li>
                            <li>PAGE</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className='header-buttons'>
                        <button className='header-post-btn'>POST A JOB</button>
                        <button className='header-log-in-btn'>LOG IN</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
