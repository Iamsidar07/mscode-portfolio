import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants'
import { logo, square, twoline } from '@/assets'
const Projects = () => {
    return (
        <section id={'work'} className='bg-[#000000] relative  py-24 '>
            <div className='absolute top-12 -left-6 w-24 lg:w-36 h-24 lg:h-36 z-20'>
                <Image src={twoline} alt='twoline' fill className='object-contain ' />
            </div>
            <div className='absolute -top-12 lg:-top-20 right-0 w-24 lg:w-32 h-28 lg:h-44 z-20'>
                <Image src={square} alt='square' fill className='object-contain w-full h-full ' />
            </div>
            <Image src={logo} alt='logo' fill className='filter blur-3xl ' />
            <div className='flex flex-col items-center justify-center max-w-[1440px] mx-auto'>
                <h2 className='text-2xl lg:text-7xl font-medium text-white'>Manoj&apos;s Portfolio</h2>
                <p className='max-w-md text-center text-sm lg:text-lg mt-6 text-white'>
                    Web apps that I have worked on.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 3xl:grid-cols-4 gap-12 mt-24 p-6 w-full'>
                    {
                        projects.map((project, i) => <ProjectCard title={project.name} description={project.description} image={project.image} appURL={project.liverUrl} key={i} />)
                    }

                </div>
            </div>
        </section>
    )
}

export default Projects