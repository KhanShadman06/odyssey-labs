import React from 'react';
import OdysseyLogo from './assets/odyssey.svg';
import Ham from './assets/ham.svg';
import Image from 'next/image';

const Nav = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="w-[30px] h-[24px]">
                <Image
                    src={OdysseyLogo}
                    alt="Odyssey Labs"
                    layout="responsive"
                    objectFit="contain"
                />
            </div>

            {/* Hamburger Menu */}
            <div className="w-[30px] h-[30px]">
                <Image
                    src={Ham}
                    alt="Menu"
                    style={{
                        filter: 'brightness(0) saturate(100%) invert(73%) sepia(51%) saturate(492%) hue-rotate(70deg) brightness(102%) contrast(104%)',
                    }}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
        </nav>
    );
};

export default Nav;
