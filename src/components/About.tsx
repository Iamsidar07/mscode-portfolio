import { manoj, pointingSpring } from '@/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='p-6 bg[#FFFFFF] w-full py-24 ' id='about'>
            <div className='w-full h-full   max-w-[1440px] mx-auto relative'>
                <Image src={pointingSpring} alt='pointing-spring' width={100} height={100} className='object-cover absolute -top-24 lg:-top-36 left-0 w-24 h-24 lg: ' />
                <h1 className='text-2xl lg:text-6xl font-medium   lg:my-12'>About</h1>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 py-6 w-full '>
                    <div className='relative h-[320px] lg:h-[580px] w-full lg:w-1/2 '>
                        <Image src={manoj} alt='about' fill className='rounded-3xl object-contain bg-top' />
                    </div>
                    <div className='flex flex-col items-center gap-6 p-12  shadow-[6px_6px_#000] hover:scale-95 border border-[#fa8000] transition-all duration-150 ease-linear max-w-md leading-relaxed w-full'>
                        <h1 className='font-medium text-lg lg:text-5xl text-left'>Manoj Kumar</h1>
                        <p>Manoj Kumar is a passionate 20-year-old coder with a love for developing full-stack web apps. He is deeply enthusiastic about programming and constantly seeks to expand his knowledge and skills in the field. With a strong foundation in web development, Manoj enjoys exploring various programming languages and platforms to create innovative and dynamic web applications. His curiosity and drive to stay up-to-date with the latest technologies make him a valuable asset in the coding community.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About