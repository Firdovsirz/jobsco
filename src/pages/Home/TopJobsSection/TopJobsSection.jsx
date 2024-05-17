import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import "../TopJobsSection/TopJobsSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import JobIcon1 from "/src/assets/Home/job-icon3.svg";
import JobIcon2 from "/src/assets/Home/job-icon2.svg";
import JobIcon3 from "/src/assets/Home/job-icon1.svg";
import JobIcon4 from "/src/assets/Home/job-icon4.svg";
import JobIcon5 from "/src/assets/Home/job-icon5.svg";
import JobIcon6 from "/src/assets/Home/job-icon1.svg";
import JobIcon7 from "/src/assets/Home/job-icon2.svg";



SwiperCore.use([Autoplay]);

export default function TopJobsSection() {
    const jobIcons = [JobIcon1, JobIcon2, JobIcon3, JobIcon4, JobIcon5, JobIcon6, JobIcon7];
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
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
    return (
        <>
            <section className='top-jobs-section'>
                <div className='top-jobs-text'>
                    <h1 className='top-job-counter'>{counter}+</h1>
                    <h2 className='top-job-heading'>Browse From Our Top Jobs</h2>
                    <p className='top-job-desc'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
                </div>
                <div className='job-cards'>
                    <Swiper
                        loop={true}
                        slidesPerView={4.5}
                        spaceBetween={40}
                        modules={[Pagination]}
                        className="mySwiper"
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000
                        }}
                    >
                        {jobs.map((item, index) => {
                            return (
                                <SwiperSlide className='job-card' key={item.id}>
                                    <div className='job-card-desc' key={item.id}>
                                        {item.remote && <p className='job-remote'>Remote</p>}
                                        <img src={jobIcons[index]} alt="jobIcon" />
                                        <h2 className='job-title'>{item.title}</h2>
                                        <p className='job-desc'>{item.desc}</p>
                                        <button>APPLY NOW</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
