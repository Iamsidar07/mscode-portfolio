import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <nav className='w-full p-6 h-16 bg-[#FFF7EE] border-b flex items-center justify-center'>
        <div className='w-8 h-6 relative'>
        <Image src={'/icons/logo.svg'} alt='logo' fill className='object-contain w-full h-full'/>
        </div>
        <span className='ml-2'>MsCodeFlow</span>
    </nav>
  )
}

export default Navbar