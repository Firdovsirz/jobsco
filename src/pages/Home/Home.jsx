import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WorkerSection from './WorkerSection/WorkerSection';
import TopJobsSection from './TopJobsSection/TopJobsSection';
import TalentsSection from './TalentsSection/TalentsSection';
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';
import TopCategoriesSection from './TopCategoriesSection/TopCategoriesSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeIntroSection />
                <TopJobsSection />
                <TalentsSection />
                <TopCategoriesSection />
                <WorkerSection />
            </main>
            <Footer />
        </>
    )
}
