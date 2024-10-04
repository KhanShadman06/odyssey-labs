import React from 'react'
import quote from '../assets/qoute.svg'
import Image from 'next/image'
interface TestimonialCardProps {
    image?: string,
    name?: string,
    position?: string,
    description?: string
}

export const TestimonialCard = ({ name, position, description }: TestimonialCardProps) => {
    return (
        <div className='bg-[#2A2A2A] w-[343px] h-[200px] rounded-3xl'>
            <section className='p-7'>
                <div className='flex gap-3 items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#E5E7EC]'></div>
                        <div>
                            <p className='font-bold font-Archivo text-white text-sm'>{name}</p>
                            <p className='font-Archivo text-white text-sm'>{position}</p>
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <Image src={quote} alt='quote' />
                    </div>
                </div>
                <p className='font-Archivo text-white text-sm mt-3'>
                    {description}
                </p>
            </section>
        </div>
    )
}
