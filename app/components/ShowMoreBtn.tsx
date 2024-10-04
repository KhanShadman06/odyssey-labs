import React from 'react'
import diagonalArrowDark from '../assets/diagonal-arrow-dark.svg'
import diagonalArrowWhite from '../assets/diagonal-arrow-white.svg'

import Image from 'next/image'
interface ShowMoreBtnProps {
    label?: string,
    description?: string
    theme?: 'dark' | 'primary'
}
const ShowMoreBtn = ({ label, description, theme }: ShowMoreBtnProps) => {
    return (
        <section className={`${theme === 'dark' ? 'bg-[#2b2b2b] text-white' : 'bg-[#9DFF50]'}  rounded-lg  
           w-[118px] h-[130px]`} >
            <div className='flex flex-col gap-2 p-2'>
                <p className='font-Archivo text-[10px] text-start'>{description}</p>
                <div className='flex justify-between'>
                    <p className='font-Archivo text-sm text-start'>{label}</p>
                    {theme === 'dark' ? <Image src={diagonalArrowDark} alt='arrow' /> : <Image src={diagonalArrowWhite} alt='arrow' />}
                </div>
            </div>
        </section>
    )
}

export default ShowMoreBtn