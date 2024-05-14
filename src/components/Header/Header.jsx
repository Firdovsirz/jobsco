import React, { useEffect, useState } from 'react';
import "../Header/Header.css";
import Logo from "/src/assets/Header/logo.webp";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 50) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            <header className={isSticky ? 'sticky' : ''}>
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
                        <button className={isSticky ? 'header-log-in-btn-sticky' : 'header-log-in-btn'}>LOG IN</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
