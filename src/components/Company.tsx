import Image from 'next/image'
import React from 'react'
import { technologies } from '@/constants'
import { companyBg } from '@/assets'
const Company = () => {
    return (
        <section className='relative w-full h-[550px] p-6 bg-[#FFF7EE] -z-20'>
            <Image src={companyBg} alt='company bg' fill className='absolute inset-0 w-full h-full object-cover object-center -z-10' />
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