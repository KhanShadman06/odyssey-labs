import React from 'react'
import logo from './assets/odyssey.svg'
import Image from 'next/image'

import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import dirbbble from './assets/dribbble.svg'

const Footer = () => {
    return (
        <footer className='bg-[#222] py-20'>
            <div className='flex items-center justify-center gap-2'>
                <Image src={logo} alt='logo' className='w-12' />
                <h1 className='text-[#9DFF50] text-3xl font-monument'>Odyssey Labs</h1>
            </div>
            <h2 className='text-xl font-monument text-white text-center mt-5'>
                Innovet. Inspire. Create
            </h2>
            <h6 className='text-white font-Archivo text-center my-8 text-sm'>Copyright © 2024 Technova Studio. All rights reserved.</h6>

            <section>

                <div className='flex items-center justify-center gap-4'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <Image src={facebook} alt='facebook' className='w-10' />
                    </a>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <Image src={linkedin} alt='linkedin' className='w-10' />
                    </a>
                    <a href='https://github.com/b14ck0ps/odyssey-labs' target='_blank' rel='noreferrer'>
                        <Image src={github} alt='github' className='w-10' />
                    </a>
                    <a href='https://www.dribbble.com/' target='_blank' rel='noreferrer'>
                        <Image src={dirbbble} alt='dribbble' className='w-10' />
                    </a>
                </div>

            </section>
        </footer>
    )
}

export default Footer