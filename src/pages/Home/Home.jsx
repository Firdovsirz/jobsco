import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeIntroSection />
            </main>
            <Footer />
        </>
    )
}
