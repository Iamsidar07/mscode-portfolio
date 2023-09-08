import { githublight, linkedin, twitter } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='relative p-6 w-full border-t border-t-[#1d31619a]'>
            <div className='flex flex-col sm:flex-row justify-between p-6 items-center w-full h-full max-w-[1440px] mx-auto gap-4 '>  
                <p className='text-white text-lg'>&copy; {new Date().getFullYear()} Manoj Kumar | All rights reserved</p>
                <div className='flex items-center gap-4'>
                    <Link href={'https://twitter.com/iamsidar07'} target='_blank'>
                    <Image src={twitter} alt='twitter' width={30} height={30} className='object-contain'/>
                    </Link>
                    <Link href={'https://github.com/iamsidar07'} target='_blank'>
                    <Image src={githublight} alt='github' width={30} height={30} className='object-contain'/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/manoj-kumar-72aa54222/'} target='_blank'>
                    <Image src={linkedin} alt='linkedin' width={30} height={30} className='object-contain'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer