import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='relative p-6 bg-[#000000] w-full  mt-24'>
            <div className='flex flex-col sm:flex-row justify-between p-6 items-center w-full h-full   max-w-[1440px] mx-auto gap-4 '>
                <p className='text-white text-lg'>&copy; {new Date().getFullYear()} CodeFlow | All rights reserved</p>
                <div className='flex items-center gap-4'>
                    <Link href={''}>
                    <Image src={'/icons/twitter.svg'} alt='twitter' width={30} height={30} className='object-contain'/>
                    </Link>
                    <Link href={''}>
                    <Image src={'/icons/twitter.svg'} alt='twitter' width={30} height={30} className='object-contain'/>
                    </Link>
                    <Link href={''}>
                    <Image src={'/icons/twitter.svg'} alt='twitter' width={30} height={30} className='object-contain'/>
                    </Link>
                    <Link href={''}>
                    <Image src={'/icons/twitter.svg'} alt='twitter' width={30} height={30} className='object-contain'/>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Footer