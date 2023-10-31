import Image from 'next/image'
import React from 'react'
import { technologies } from '@/constants'
import { companyBg } from '@/assets'
const Company = () => {
    return (
        <section className='relative w-full px-3 py-24  border-y border-gray-900 -z-50 '>
            <div className='flex justify-center'>
                <div className='absolute top-0 bg-gradient-to-r  from-transparent via-violet-400 to-transparent h-[1px] w-1/2'></div>
                <div className='bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 -top-[150px]' />
            </div>

            <h2 className='text-center my-12 text-lg lg:text-6xl'><span className='text-pink-400'>Technology</span> I&apos;m interested in</h2>
            <div className='flex items-center justify-center  h-full max-w-[1440px] mx-auto flex-wrap'>
                <div className='flex items-center flex-wrap gap-4 lg:gap-6'>
                    {
                        technologies.map((tech, i) => (<div className='w-12 h-12 lg:w-24 lg:h-24 relative' key={i}>
                            <Image key={i} src={tech.icon} alt={tech.name} fill className='object-contain' />
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Company