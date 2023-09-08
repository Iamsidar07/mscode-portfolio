import { right, rightArrow, test } from '@/assets'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectCardProps = {
    title: string,
    description: string,
    image: StaticImageData,
    appURL: string,
}

const ProjectCard = ({ title, description, image, appURL }: ProjectCardProps) => {
    return (
        <div className='w-[380px] md:w-[420px] h-[400px] bg-[#2726266f] flex flex-col rounded-lg relative group overflow-hidden backdrop-blur-3xl mx-auto'>
               <div className="relative w-[380px] md:w-[420px] h-[400px]">
                <Image src={image} alt={title} fill className='object-contain' />
               </div>
            <Link href={appURL}  target='_blank' className='backdrop-blur-3xl p-6 justify-between bg-[#2726266f] w-full absolute -bottom-12 group-hover:top-0 h-0 flex group-hover:h-full transition-all duration-200 ease-linear '>
                <div className='max-w-[75%] '>
                    <h1 className='text-white capitalize text-lg lg:text-2xl group-hover:underline transition-all duration-200 ease-linear tracking-wider'>{title}</h1>
                    <p className='mt-2 text-left text-gray-300'>{description}</p>
                </div>
                <div className='w-6 h-6 lg:w-8 lg:h-8 relative top-0 flex flex-col items-center justify-center'>
                    <Image src={rightArrow} alt='rightarrow' fill className='object-contain group-hover:-rotate-45 transition-transform duration-200 ease-linear' />
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
