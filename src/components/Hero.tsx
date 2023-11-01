import { github, js, left, line, right, spring, star } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { AiOutlineRight } from "react-icons/ai"
const Hero = () => {
    return (
        <section className='relative'>
            <Image src={left} alt='left' width={100} height={30} className='object-contain absolute top-0 left-0 hidden lg:block  ' />
            <Image src={right} alt='right' width={100} height={30} className='object-cover absolute bottom-0 right-0 hidden invert lg:block ' />
            <Image src={spring} alt='spring' width={150} height={20} className='object-cover absolute invert -bottom-0 left-4 hidden lg:block ' />
            <Image src={star} alt='star' width={30} height={20} className='object-cover absolute top-[25%] left-4 invert' />
            <Image src={star} alt='star' width={30} height={20} className='object-cover absolute bottom-12 lg:bottom-[35%] right-4 invert' />
            <div className='w-full h-[calc(100vh-4rem)]  flex flex-col items-center justify-center gap-4'>
                <Link href={'https://github.com/iamsidar07'} target='_blank' className='bg-gradient-radial to-[#0f172a] from-[#1a2d5e] border border-cyan-600 rounded-full px-7 py-1.5 md:py-2.5 flex items-center gap-2 hover:border-sky-500 github'>
                    <div className='relative w-5 h-6'>
                        <Image src={github} alt='github' fill className='object-contain invert' />
                    </div>
                    <p>Github</p>
                </Link>
                <h1 className='text-3xl lg:text-7xl leading-9 text-center capitalize font-semibold tracking-wider'> a dedicated</h1>
                <h1 className='text-[25px] lg:text-6xl leading-9 text-center capitalize font-semibold tracking-wider flex items-center gap-2'>
                    <span className='text-green-400'>Javascript</span>
                    <div className='relative w-20 h-12 lg:w-28'>
                        <Image src={js} alt='js' fill className='object-contain w-full h-full' />
                    </div>
                    <span className='text-pink-500'>
                        Developer
                    </span>
                </h1>
                <p className='lg:mt-4 text-lg lg:text-2xl font-medium max-w-2xl mx-auto text-center'>Why do programmers prefer dark mode?
                    <br />
                    <span className='w-44 h-12 relative ml-2'>
                        <span className='text-[#fa8000]'> Because light attracts bugs!</span>
                        <Image src={line} alt='line' fill className='object-contain mt-6 max-w-[100px]' />
                    </span>
                </p>
                <Link href={'/#contact'} className='mt-12'>
                    <Button
                        title='HIRE ME'
                        icon={<AiOutlineRight className='w-4 group-hover:translate-x-2 duration-200' />}

                    />
                </Link>

            </div>
        </section>
    )
}

export default Hero
