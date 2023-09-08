'use client'
import { email, explaination, feather, tick } from '@/assets'
import Image from 'next/image'
import React, { FormEvent, useState, } from 'react'
import Lottie from 'react-lottie'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
import Button from './Button'
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
        
        if (!emailData.name || !emailData.email || !emailData.message) {
            toast.error('Please fill all the fields!');
            return;
        }
        toast.promise((async () => {
            try {
                const emailContent = {
                    from_name: emailData.name,
                    to_name: 'Manoj kumar',
                    from_email: emailData.email,
                    to_email: 'ms8460149@gmail.com',
                    message: emailData.message
                };
                await emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID,emailContent, emailjsConfig.PUBLIC_KEY);
            } catch (error) {
                toast.error('Something went wrong! Please try again later.');
                console.log(error);
            }finally{
                setEmailData({
                    email:"",
                    name:"",
                    message:""
                })
            }
        })(), {
            loading: 'Sending Email...',
            success: 'Thank you.I will get back to you as soon as possible.',
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
                        height={300}
                        width={300}
                        style={{ width: '100%', height: '100%' }}
                    />
                   
                </div>
                <form onSubmit={sendEmail} className='flex flex-col items-start gap-4 p-6 w-full h-full  lg:max-w-lg '>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="name">Your Name</label>
                        <input id='name' name='name' placeholder='Manoj Kumar' value={emailData.name} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[12px_12px_#4b78e6] shadow-[8px_8px_#000] transition-all duration-150 ease-linear outline-none rounded-lg ' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="email">Email</label>
                        <input id='email' name='email' placeholder='example@gmail.com' value={emailData.email} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[12px_12px_#4b78e6] shadow-[8px_8px_#000] transition-all duration-150 ease-linear outline-none rounded-lg ' />
                    </div>
                    <div className='flex flex-col w-full gap-2 mb-6'>
                        <label htmlFor="message">Message</label>
                        <textarea  id='message' name='message' placeholder='Type your message here...' value={emailData.message} onChange={handleEmailDataChange} className='px-7 py-4 pl-4 bg-transparent border w-full border-[#fa8000] focus:shadow-[12px_12px_#4b78e6] shadow-[8px_8px_#000] transition-all duration-150 ease-linear outline-none min-h-[250px] rounded-lg' />
                    </div>
                    <Button title='Send Email'/>
                </form>
            </div>
        </section>
    )
}

export default Contact
