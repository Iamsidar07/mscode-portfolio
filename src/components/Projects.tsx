import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section className='bg-[#000000] relative  py-24 '>
            <div className='absolute top-12 -left-6 w-24 lg:w-36 h-24 lg:h-36 z-20'>
                <Image src={'/icons/twoline.svg'} alt='twoline' fill className='object-contain ' />
            </div>
            <div className='absolute -top-12 lg:-top-20 right-0 w-24 lg:w-32 h-28 lg:h-44 z-20'>
                <Image src={'/icons/square.svg'} alt='square' fill className='object-contain w-full h-full ' />
            </div>
            <div className='flex flex-col items-center justify-center max-w-[1440px] mx-auto'>
                <h2 className='text-2xl lg:text-7xl font-medium text-white'>Codeflows Portfolio</h2>
                <p className='max-w-md text-center text-sm lg:text-lg mt-6 text-white'>
                    Webflow projects that we work on.
                </p>
                    <Image src={'/icons/logo.svg'} alt='logo' fill className='filter blur-3xl ' />
                <div className='grid grid-cols-1 lg:grid-cols-2 7xl:grid-cols-3 gap-12 mt-24 p-6 w-full'>
                    {
                        Array(6).fill(0).map((_, i) => <ProjectCard key={i}/>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Projects