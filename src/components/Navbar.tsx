"use client"
import { logo, manoj, menu } from '@/assets'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMenuClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
    }

    return (
        <nav className='w-full p-6 min-h-16 border-b border-gray-800'>
            <div className='w-full flex items-center justify-between relative max-w-[1440px] mx-auto '>
                <Link href={'/'} className='flex items-center gap-2'>
                    <span className='text-lg'>Manoj Kumar</span>
                </Link>

                {/* Desktop navigation  */}
                <div className='hidden md:flex items-center gap-4'>
                    {
                        navLinks.map((link, index) => (<Link className='hover:text-[#fa8000]' href={`/#${link.id}`} key={index}>{link.title}</Link>))
                    }
                </div>

                {/* Menu Icon  */}
                <Image src={menu} alt='menu' width={20} height={20} className='object-contain md:hidden cursor-pointer invert' onClick={handleMenuClick} />

                {/* Mobile Navigation  */}

                {
                    isDropdownOpen &&
                    <div className='flex flex-col md:hidden  gap-4 absolute top-16 right-4 min-w-[200px] py-4  border border-[#1d31619a] rounded-md z-50 shadow-sm bg-gradient-radial from-[#0f172a] to-transparent'>
                        {
                            navLinks.map((link, index) => (<Link onClick={() => setIsDropdownOpen(false)} className='pl-4 border-b border-b-[#1d31619a] last:border-none py-1' href={`/#${link.id}`} key={index}>
                                {link.title}
                            </Link>))
                        }
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
