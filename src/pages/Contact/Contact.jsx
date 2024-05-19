import React from 'react';
import "../Contact/Contact.css";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Contact() {
    return (
        <>
            <Header />
            <main className='contact-main'>
                <section className='contact-heading'>
                    <h1>Contact</h1>
                </section>
                <section className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9581853.80133783!2d-14.999798786966357!3d54.10353482830762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2zQmlybGXFn2lrIEtyYWxsxLFr!5e0!3m2!1str!2saz!4v1716022259504!5m2!1str!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className='contact-form'>
                    <h2>Get in Touch</h2>
                    <div>
                        <form>
                            <textarea placeholder='Enter Message'></textarea>
                            <div>
                                <label htmlFor='name'>
                                    <input type="text" placeholder='Enter your name' />
                                </label>
                                <label htmlFor='email'>
                                    <input type="text" placeholder='Email' />
                                </label>
                            </div>
                            <label htmlFor="">
                                <input type="text" placeholder='Enter your subject' />
                            </label>
                            <button>SEND</button>
                        </form>
                        <div className='contact-infos'>
                            <div>
                                <HomeIcon style={{ color: "#8f9195", fontSize: 40, marginRight: 10 }} />
                                <div>
                                    <a href='https://www.google.com/maps/place/Buttonwood+Farm+%26+Vineyard/@34.6225323,-120.1201578,17z/data=!3m1!4b1!4m6!3m5!1s0x80e95541884c0375:0xa720f5f60c641614!8m2!3d34.6225279!4d-120.1175775!16s%2Fg%2F11krvmccpk?entry=ttu'>Buttonwood, California.</a>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div>
                                <PhoneAndroidIcon style={{ color: "#8f9195", fontSize: 40, marginRight: 10 }} />
                                <div>
                                    <a href="tel:+1 253 565 2365">+1 253 565 2365</a>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div>
                                <MailIcon style={{ color: "#8f9195", fontSize: 40, marginRight: 10 }} />
                                <div>
                                    <a href='mail:support@colorlib.com'>support@colorlib.com</a>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}
