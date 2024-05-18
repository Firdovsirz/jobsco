import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import "../WorkerSection/WorkerSection.css"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import UserImage from "/src/assets/Home/user-image.png";
import QuotesSign from "/src/assets/Home/quotes-sign.webp";
import Testimonial from "/src/assets/Home/testimonial.webp";
import TestimonialShape from "/src/assets/Home/testimonial-shape.webp";


export default function WorkerSection() {
    const userImages = [Testimonial, UserImage, UserImage];
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/feedback")
            .then(res => res.json())
            .then(data => setFeedback(data))
            .catch(err => console.log(err))
    }, [])
    console.log(feedback);
    return (
        <>
            <section className='worker-section'>
                <div className='worker-swiper'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {feedback.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='feedback'>
                                        <img src={QuotesSign} alt="" />
                                        <p>{item.desc}</p>
                                        <div className='feedback-user'>
                                            <img src={userImages[index]} alt="user-image" />
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>{item.jobTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <img className='test-shape' src={TestimonialShape} alt="" />
                </div>
            </section>
        </>
    )
}
