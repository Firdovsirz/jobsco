import React, { useEffect, useState } from 'react';
import "../TopJobsSection/TopJobsSection.css";

export default function TopJobsSection() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.log(err));
    }, []);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                const intervalId = setInterval(() => {
                    setCounter(prevCount => {
                        const nextCount = prevCount + 1;
                        if (nextCount >= 1000) {
                            clearInterval(intervalId);
                            return 1000;
                        }
                        return nextCount;
                    });
                }, 30);
                return () => clearInterval(intervalId);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    console.log(jobs);
    return (
        <>
            <section className='top-jobs-section'>
                <div className='top-jobs-text'>
                    <h1 className='top-job-counter'>{counter}+</h1>
                    <h2 className='top-job-heading'>Browse From Our Top Jobs</h2>
                    <p className='top-job-desc'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                </div>
                <div className='job-cards'></div>
            </section>
        </>
    )
}
