"use client"
import { logo, menu } from '@/assets'
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
        <nav className='w-full p-6 h-16 bg-[#ffffff] border-b'>
            <div className='w-full flex items-center justify-between relative '>
                <Link href={'/'}>
                    <span>msCode</span>
                </Link>

                {/* Desktop navigation  */}
                <div className='hidden md:flex items-center gap-4'>
                    {
                        navLinks.map((link, index) => (<Link className='hover:text-[#fa8000]' href={`/#${link.id}`} key={index}>{link.title}</Link>))
                    }
                </div>

                {/* Menu Icon  */}
                <Image src={menu} alt='menu' width={20} height={20} className='object-contain md:hidden cursor-pointer' onClick={handleMenuClick} />

                {/* Mobile Navigation  */}

                {
                    isDropdownOpen &&
                    <div className='flex flex-col md:hidden  gap-4 absolute top-12 right-4 min-w-[200px] py-4  border rounded-md z-50 shadow-sm bg-gradient-radial from-white to-transparent'>
                        {
                            navLinks.map((link, index) => (<Link className='hover:text-[] pl-4 border-b last:border-none py-1' href={`/#${link.id}`} key={index}>
                                <span onClick={() => setIsDropdownOpen(false)} >{link.title}</span>
                            </Link>))
                        }
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar