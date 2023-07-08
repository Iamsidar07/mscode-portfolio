import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <section className='relative w-full h-[550px] p-6 bg-[#FFF7EE] -z-20'>
      <Image src={'/icons/company-bg.svg'} alt='company bg' fill className='absolute inset-0 w-full h-full object-cover object-center -z-10' />
      <div className='flex items-center justify-center  h-full max-w-[1440px] mx-auto flex-wrap'>
        <div className='flex items-center flex-wrap gap-4 lg:gap-6'>
          {
            Array(6).fill(0).map((_, i) => (<Image key={i} src={'/icons/logo.svg'} alt={''} width={100} height={30} className='object-contain' />))
          }
        </div>
      </div>
    </section>
  )
}

export default Company