import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';
import TopJobsSection from './TopJobsSection/TopJobsSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeIntroSection />
                <TopJobsSection />
            </main>
            <Footer />
        </>
    )
}
