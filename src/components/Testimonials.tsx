import { pointingSpring } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { testimonials } from '@/constants'

const backgroundColors = ["bg-[#73dc8c]", "bg-[#fa9bfa]","bg-[#4b78e6]"];
const Testimonials = () => {
    return (
        <section className='p-6 bg[#FFFFFF] w-full py-24 '>
            <div className='w-full h-full   max-w-[1440px] mx-auto relative'>
                <Image src={pointingSpring} alt='pointing-spring' width={100} height={100} className='object-cover absolute -top-24 lg:-top-36 left-0 w-24 h-24 lg: ' />
                <h1 className='text-2xl lg:text-6xl font-medium   lg:my-12'>Testimonials</h1>
                <div className='flex flex-col lg:flex-row items-start gap-4 py-6 w-full '>
                    {
                        testimonials.map(({ testimonial, image, name, company, designation }, i) => <div key={i} 
                        className={`${backgroundColors[i]} flex flex-col items-center gap-6 p-12  hover:shadow-[6px_6px_#000] hover:scale-95 border border-[#fa8000] transition-all duration-150 ease-linear rounded-lg 
                        `}>
                            <p>{testimonial}</p>
                            <div className='flex items-start gap-4 w-full '>
                                <div className='rounded-full w-12 h-12 object-cover bg-blue-500 relative'>
                                    <Image src={image} alt={name} fill className='object-contain rounded-full' />
                                </div>
                                <div>
                                    <h3 className='text-lg font-medium'>{name}</h3>
                                    <p className='text-sm'>{designation}, <span className='text-[#FF6B3C]'>{company}</span></p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Testimonials