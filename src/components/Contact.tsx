'use client'
import { email, explaination, feather, tick } from '@/assets'
import Image from 'next/image'
import React, { FormEvent, useState, } from 'react'
import Lottie from 'react-lottie'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: email,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const emailjsConfig = {
    serviceID: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
    templateID: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
    PUBLIC_KEY: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
}
const Contact = () => {

    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleEmailDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget);
        if (!emailData.name || !emailData.email || !emailData.message) {
            toast.error('Please fill all the fields!');
            return;
        }
        toast.promise((async () => {
            try {
                await emailjs.sendForm(emailjsConfig.serviceID, emailjsConfig.templateID, event.currentTarget, emailjsConfig.PUBLIC_KEY);
            } catch (error) {
                toast.error('Something went wrong! Please try again later.');
                console.log(error);
            }
        })(), {
            loading: 'Sending Email...',
            success: 'Email Sent Successfully!',
            error: (error) => error.message
        })
    }
    return (
        <section id='contact' className='relative  bg-[#FFF7EE] w-full py-24 z-20'>
            <div className='absolute -top-16 lg:-top-24 -left-6 w-24 lg:w-36 h-24 lg:h-36'>
                <Image src={feather} alt='feather' fill className='object-contain ' />
            </div>

            <div className='flex flex-col lg:flex-row justify-center w-full h-full   max-w-[1440px] mx-auto '>
                <div className='relative h-[320px] lg:h-[580px] w-full lg:w-1/2 '>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <form onSubmit={sendEmail} className='flex flex-col items-start gap-4 p-6 w-full h-full  lg:max-w-lg '>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="name">Your Name</label>
                        <input id='name' name='name' placeholder='Manoj Kumar' value={emailData.name} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[4px_4px_#000] transition-all duration-150 ease-linear outline-none ' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="email">Email</label>
                        <input id='email' name='email' placeholder='Manoj Kumar' value={emailData.email} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[4px_4px_#000] transition-all duration-150 ease-linear outline-none ' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="message">Message</label>
                        <textarea  id='message' name='message' placeholder='Hey!🙋‍♂️' value={emailData.message} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[4px_4px_#000] transition-all duration-150 ease-linear outline-none min-h-[250px] ' />
                    </div>
                    <button type='submit' className='border px-7 py-3.5 rounded-lg tracking-wider bg-[#fa8000] text-white font-medium shadow-[4px_4px_#000] border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-8'>
                        Send Email
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact