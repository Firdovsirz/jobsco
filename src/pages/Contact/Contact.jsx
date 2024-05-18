import React from 'react';
import "../Contact/Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <section className='contact-heading'>
                    <h1>Contact</h1>
                </section>
                <section className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9581853.80133783!2d-14.999798786966357!3d54.10353482830762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2zQmlybGXFn2lrIEtyYWxsxLFr!5e0!3m2!1str!2saz!4v1716022259504!5m2!1str!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className='contact-form'>
                    <h2>Contact</h2>
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
                                <input type="text" placeholder='Enter your subject'/>
                            </label>
                            <button>SEND</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
