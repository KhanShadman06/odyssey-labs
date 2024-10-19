import React from 'react'
import { TestimonialCard } from '../../components/TestimonialCard'
import ArrowLeft from '../../assets/arrow-left-white.svg'
import ArrowRight from '../../assets/arrow-right-fill-white.svg'
import Image from 'next/image'
const TestimonialsList = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white font-monument text-center md:text-2xl lg:text-3xl xl:text-4xl'>
                <span className=' bg-[#9DFF50] text-black px-4 py-2 rounded-lg transform -skew-x-6 inline-block'>Testimonials </span>
                that  <br />
                speak to our <br />
                Result
            </h1>
            <p className='text-[#aaa] font-Archivo mx-6 text-center my-3 text-sm md:text-base'>
                Read through our testimonials to see why our clients love working with us and how we can
                help you achieve your business goals through creative
            </p>

            <section className='md:px-2 w-full flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start overflow-auto overflow-x-scroll scroll-smooth overflow-y-hidden'>
                <TestimonialCard name='Azran Hossain' position='Developer' description={`Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!`} />
                <TestimonialCard name='Azran Hossain' position='Developer' description={`Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!`} />
                <TestimonialCard name='Azran Hossain' position='Developer' description={`Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!`} />
                <TestimonialCard name='Azran Hossain' position='Developer' description={`Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!`} />
            </section>

            <section>
                <div className='flex justify-center items-center gap-4 my-5'>
                    <Image src={ArrowLeft} alt='arrow-left' className='cursor-pointer' />
                    <Image src={ArrowRight} alt='arrow-right' className='cursor-pointer' />
                </div>
            </section>

        </div >
    )
}

export default TestimonialsList