import { right, rightArrow } from '@/assets'
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
        <div className='w-full h-full flex flex-col rounded-lg overflow-hidden group shadow-lg'>
            <div className='relative h-[220px] lg:h-[400px] w-full'>
                <Image src={image} alt={title} fill className='object-cover group-hover:scale-125 transition-transform duration-200 ease-linear w-full h-full aspect-video' />
            </div>
            <div className='backdrop-blur-3xl p-6 flex items-center justify-between bg-[#2726266f]'>
                <div className='max-w-[75%]'>
                    <h1 className='text-white capitalize text-lg lg:text-2xl truncate group-hover:underline transition-all duration-200 ease-linear tracking-wider'>{title}</h1>
                    <p className='mt-2 text-left text-gray-300  truncate'>{description}</p>
                </div>
                <Link href={appURL} className='w-6 h-6 lg:w-8 lg:h-8 relative flex flex-col items-center justify-center'>
                    <Image src={rightArrow} alt='rightarrow' fill className='object-contain group-hover:-rotate-45 transition-transform duration-200 ease-linear' />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
