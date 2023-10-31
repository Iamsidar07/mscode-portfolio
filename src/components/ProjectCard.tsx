import { right, rightArrow, test } from '@/assets'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Tag = {
    name: string,
    color: string
}
type ProjectCardProps = {
    title: string,
    description: string,
    image: StaticImageData,
    appURL: string,
    tags: Tag[]
}


const ProjectCard = ({ title, description, image, appURL, tags }: ProjectCardProps) => {
    return (
        <div className='max-w-[350px] lg:max-w-[450px] border border-gray-800 flex flex-col rounded-lg group overflow-hidden p-2'>
            <div className="relative h-[196px] lg:h-[220px] w-full">
                <Link href={appURL} target='_blank' className='relative inline-block w-full h-full'>
                    <Image src={image} alt={title} fill className='object-contain' />
                </Link>
            </div>
            <div className='p-4'>
                <h1 className='text-white capitalize text-lg lg:text-2xl group-hover:underline transition-all duration-200 ease-linear tracking-wider'>{title}</h1>
                <p className='mt-2 text-left text-gray-300'>{description}</p>
                <div className='flex items-center gap-1 flex-wrap mt-2.5'>
                    {
                        tags?.map((tag, i) => <span key={i} className={`${tag.color}`}>#{tag.name}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
