import React from 'react'
import OdysseyLogo from './assets/odyssey.svg'
import Ham from './assets/ham.svg'
import Image from 'next/image'
const Nav = () => {
    return (
        <div>
            <nav className='flex items-center justify-between p-6'>
                <div className='flex-shrink-0'>
                    <Image src={OdysseyLogo} alt="Odyssey Labs" height={30} width={50} />
                </div>

                <div className='hidden md:flex flex-grow justify-center'>
                    <ul className='text-white text-lg font-Archivo flex gap-10'>
                        <li className='hover:text-gray-400 transition-colors duration-300'><a href="#home">Home</a></li>
                        <li className='hover:text-gray-400 transition-colors duration-300'><a href="#service">Service</a></li>
                        <li className='hover:text-gray-400 transition-colors duration-300'><a href="#portfolio">Portfolio</a></li>
                        <li className='hover:text-gray-400 transition-colors duration-300'><a href="#about">About</a></li>
                    </ul>
                </div>

                <div className='flex-shrink-0'>
                    <Image src={Ham} alt="Menu" height={30} width={30} className='md:hidden' />
                </div>
            </nav>
        </div>

    )
}

export default Nav