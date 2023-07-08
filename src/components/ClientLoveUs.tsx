import Image from 'next/image'
import React from 'react'

const ClientLoveUs = () => {
    return (
        <section className='p-6 bg[#FFFFFF] w-full py-24 '>


            <div className='w-full h-full   max-w-[1440px] mx-auto relative'>
                <Image src={'/icons/pointing-spring.svg'} alt='pointing-spring' width={100} height={100} className='object-cover absolute -top-24 lg:-top-36 left-0 w-24 h-24 lg: ' />
                <h1 className='text-2xl lg:text-6xl font-medium   lg:my-12'>Clients Love US</h1>
                <div className='flex flex-col lg:flex-row items-start gap-4 py-6 w-full '>
                    {
                        Array(3).fill(0).map((_, i) => <div key={i} className='flex flex-col items-center gap-6 p-12  hover:shadow-[6px_6px_#000] hover:scale-95 border border-[#fa8000] transition-all duration-150 ease-linear'>
                            <p>They are very effective and responsive in their work. I recommend working with them on complex javascript and Webflow projects.</p>
                            <div className='flex items-start gap-4 w-full '>
                                <div className='rounded-full w-12 h-12 object-cover bg-blue-500 relative'>

                                    <Image src={'/images/client.png'} alt='client' fill className='object-contain rounded-full' />
                                </div>
                                <div>
                                    <h3 className='text-lg font-medium'>Siddharth</h3>
                                    <p className='text-sm'>Founder, <span className='text-[#FF6B3C]'>Codeflows</span></p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default ClientLoveUs