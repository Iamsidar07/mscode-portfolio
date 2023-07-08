import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
    return (
        <section className='relative  bg-[#FFF7EE] w-full py-24 z-20 mt-24'>
            <div className='absolute -top-16 lg:-top-24 -left-6 w-24 lg:w-36 h-24 lg:h-36'>
            <Image src={'/icons/feather.svg'} alt='feather' fill className='object-contain ' />
            </div>
        
            <div className='flex flex-col lg:flex-row justify-center w-full h-full   max-w-[1440px] mx-auto '>
                <div className='relative h-[320px] lg:h-[580px] w-full lg:w-1/2 '>
                <Image src={'/icons/explaination.svg'} alt='explain'fill  className='object-contain w-full h-full'/>
                </div>
                <div className='flex flex-col items-start gap-4 p-6 w-full max-w-md '>
                    <h2 className='text-2xl lg:text-6xl text-left my-6 font-semibold'>How It Works</h2>
                    {
                        Array(3).fill(0).map((_, i) => <div key={i} className='flex items-center gap-6'>
                            <Image src={'/icons/tick.svg'} alt='tick' width={20} height={20} className='object-contain' />
                            <p className='text-left'>Signup for a plan and get your Personalised Dashboard Link via email.</p>
                        </div>)
                    }
                    <button className='border px-7 py-3.5 rounded-lg tracking-wider bg-[#fa8000] text-white font-medium shadow-[4px_4px_#000] border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-8'>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks