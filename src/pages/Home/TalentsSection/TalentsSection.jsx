import React from 'react';
import "../TalentsSection/TalentsSection.css";
import TalentsImage from "/src/assets/Home/talents.webp";

export default function TalentsSection() {
    return (
        <>
            <section className='talents-section'>
                <div className='talents-main'>
                    <img src={TalentsImage} alt="talent-hero" />
                    <div className='talents-text'>
                        <h2>We build Lasting Relationships Between Candidates & Businesses</h2>
                        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placholder text commonly used.</p>
                        <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placholder text commonly used.</p>
                        <button>FIND TALENT</button>
                    </div>
                </div>
                <h1>TALENTS</h1>
            </section>
        </>
    )
}
