import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
    return (
        <div className='w-full h-full flex flex-col rounded-lg cursor-pointer overflow-hidden group shadow-lg'>
            <div className='relative h-[300px] lg:h-[480px] w-full'>
                <Image src={'/images/project.webp'} alt='project' fill className='object-cover group-hover:scale-125 transition-transform duration-200 ease-linear w-full h-full' />
            </div>
            <div className='backdrop-blur-3xl p-6 flex items-center justify-between bg-[#2726266f]'>
                <div>
                    <h1 className='text-white capitalize text-2xl truncate group-hover:underline transition-all duration-200 ease-linear tracking-wider'>amastas</h1>
                    <p className='mt-2 text-left text-gray-300'>Autocomplete search and filtering system</p>
                </div>
                <Image src={'/icons/right-arrow.svg'} alt='rightarrow' width={30} height={30} className='object-contain group-hover:-rotate-45 transition-transform duration-200 ease-linear' />
            </div>
        </div>
    )
}

export default ProjectCard
