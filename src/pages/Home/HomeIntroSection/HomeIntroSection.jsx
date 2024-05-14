import React from 'react';
import "../HomeIntroSection/HomeIntroSection.css"
import IntroShape from "/src/assets/Home/intro-shape2.webp";
import IntroHero from "/src/assets/Home/intro-hero.webp";

export default function HomeIntroSection() {
    return (
        <>
            <section className='home-intro-section'>
                <div className='home-intro-text'>
                    <h4>Easiest way to find a perfect job</h4>
                    <h1>Find Your Next Dream Job</h1>
                    <div className='home-intro-buttons'>
                        <button className='intro-job-btn'>LOOKING FOR A JOB?</button>
                        <button className='intro-talent-btn'>Find Talent</button>
                    </div>
                </div>
                <div className='intro-bg-text'>
                    <h2>jobs</h2>
                </div>
                    <img className='intro-shape-image' src={IntroShape} alt="" />
                    <img className='intro-hero-image' src={IntroHero} alt="" />
            </section>
        </>
    )
}
