import React from 'react'
import OdysseyLogo from './assets/odyssey.svg'
import Ham from './assets/ham.svg'
import Image from 'next/image'
const Nav = () => {
    return (
        <div className='h-screen bg-[#222222]'
            style={{
                backgroundImage: `
              repeating-linear-gradient(90deg, rgba(48,48,48, 0.1), rgba(229, 231, 235, 0.1) 1px, transparent 1px, transparent 35px),
              repeating-linear-gradient(0deg, rgba(48,48,48,. 0.1), rgba(229, 231, 235, 0.1) 1px, transparent 1px, transparent 120px)`,
            }}
        >
            <nav className='flex justify-between p-6'>
                <Image src={OdysseyLogo} alt="Odyssey Labs" height={50} width={50} />
                <Image src={Ham} alt="Menu" height={30} width={30} />
            </nav>
        </div>

    )
}

export default Nav