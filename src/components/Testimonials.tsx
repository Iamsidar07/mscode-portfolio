import { pointingSpring } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { testimonials } from '@/constants'

const Testimonials = () => {
    return (
        <section className='p-6  w-full py-24 '>
            <div className='w-full h-full   max-w-[1440px] mx-auto relative'>
                <Image src={pointingSpring} alt='pointing-spring' width={100} height={100} className='object-cover absolute -top-24 lg:-top-36 left-0 w-24 h-24 invert' />
                <h1 className='text-2xl lg:text-6xl font-medium   lg:my-12'>Inspirations</h1>
                <div className='flex flex-col md:flex-row items-start gap-8 py-6 w-full '>
                    {
                        testimonials.map(({ testimonial, image, name }, i) => <div key={i}
                            className={`group flex flex-col items-center gap-6 p-12 shadow-[8px_8px_#000] md:shadow-none  md:hover:shadow-[8px_8px_skyblue] hover:scale-105 hover:rotate-2  transition-all duration-150 ease-linear rounded-lg relative border border-[#1d31619a] mt-12 md:mt-0 hover:border-sky-500`}>
                            <p>{testimonial}</p>
                            <h3 className='text-lg font-medium italic'>-@{name}</h3>
                            <div className={`rounded-full border-t border-t[#1d31619a] group-hover:border-t-sky-500 w-16 h-16 object-cover absolute left-3 -top-8 z-20 bg-[#1d3161]`}>
                                <Image src={image} alt={name} fill className='object-cover rounded-full p-1' />
                            </div>

                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Testimonials
