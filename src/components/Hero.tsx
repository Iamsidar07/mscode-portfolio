import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-[#FFF7EE] relative'>
            <Image src={'/images/left.svg'} alt='left' width={100} height={30} className='object-contain absolute top-0 left-0 hidden lg:block ' />
            <Image src={'/images/right.svg'} alt='right' width={100} height={30} className='object-cover absolute bottom-0 right-0 hidden lg:block ' />
            <Image src={'/images/spring.svg'} alt='spring' width={150} height={20} className='object-cover absolute -bottom-[13%] left-4 hidden lg:block ' />
            <Image src={'/images/star.svg'} alt='star' width={30} height={20} className='object-cover absolute top-[25%] left-4  ' />
            <Image src={'/images/star.svg'} alt='star' width={30} height={20} className='object-cover absolute bottom-12 lg:bottom-[35%] right-4  ' />


            <div className='w-full h-[calc(100vh-4rem)]  flex flex-col items-center justify-center gap-4'>
                <h1 className='text-2xl lg:text-7xl leading-9 text-center capitalize font-semibold tracking-wider'> a dedicated</h1>
                <h1 className='text-2xl lg:text-7xl leading-9 text-center capitalize font-semibold tracking-wider flex items-center gap-2'>
                    <span>Javascript</span>
                    <div className='relative w-20 h-12 lg:w-28'>
                        <Image src={'/icons/js.png'} alt='js' fill className='object-contain w-full h-full' />
                    </div>
                    <span>
                        Developer
                    </span>
                </h1>
                <p className='mt-4 text-lg lg:text-2xl font-medium max-w-2xl mx-auto text-center'>Get a Javascript | Webflow developer for all your webflow projects for a
                    <br className='lg:hidden' />
                    <span className='w-44 h-12 relative ml-2'>
                        <span className='text-[#fa8000]'> flat monthly fee.</span>
                        <Image src={'/icons/line.svg'} alt='line' fill className='object-contain mt-6' />
                    </span>
                </p>

                <button className='border px-7 py-3.5 rounded-lg tracking-wider bg-[#fa8000] text-white font-medium shadow-[4px_4px_#000] border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-12'>
                    Get Started
                </button>

            </div>
        </section>
    )
}

export default Hero