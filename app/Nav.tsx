import React from 'react'
import OdysseyLogo from './assets/odyssey.svg'
import Ham from './assets/ham.svg'
import Image from 'next/image'
const Nav = () => {
    return (
        <div>
            <nav className='flex justify-between p-6'>
                <Image src={OdysseyLogo} alt="Odyssey Labs" height={30} width={50} />
                <Image src={Ham} alt="Menu" height={30} width={30} />
            </nav>
        </div>

    )
}

export default Nav