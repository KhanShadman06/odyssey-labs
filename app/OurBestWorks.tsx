import Image from 'next/image'
import React from 'react'
import arrowRight from './assets/arrow-right.svg'
import ProjectCard from './components/ProjectCard'
import arrowRightFill from './assets/arrow-right-fill-dark.svg';
import arrowLeftFill from './assets/arrow-left-dark.svg';
import ServiceTag from './components/ServiceTag';
import ArrowGreen from './assets/diagonal-arrow-green.svg';
const OurBestWorks = () => {
    return (
        <div className='pb-10'>
            <section className="flex mb-10">
                <div className='absolute top-7 -right-[1.7rem] bg-[#9DFF50] -rotate-90'>
                    <p className="text-[0.5rem] p-1 px-3 font-Archivo">WHAT WE DO</p>
                </div>
            </section>
            <section className="flex ml-6 gap-5 items-center">
                <h1 className="inline-block text-2xl text-[#222] font-monument">
                    Our <span className='bg-[#9DFF50] p-2 rounded-xl -skew-x-6 transform inline-block'>Best Work</span> Of <br /> Successful Projects
                </h1>
            </section>
            <button className='mt-5 border border-black rounded-full px-6 py-3 flex mx-auto font-Archivo'>
                See More
                <Image src={arrowRight} alt='arrow-right' className='inline-block ml-5' />
            </button>
            <section className='flex flex-col items-center my-8 gap-3'>
                <ProjectCard w="343px" h="311px" />
                <ProjectCard w="343px" h="311px" />
            </section>
            <div className='flex justify-center items-center gap-4'>
                <Image src={arrowLeftFill} alt='arrow-left' />
                <Image src={arrowRightFill} alt='arrow-right' />
            </div>
            <div className='flex space-x-4 overflow-x-auto my-5 ml-6'>
                <ServiceTag tag='UX Research' />
                <ServiceTag tag='Full-Stack Development' />
                <ServiceTag tag='Visual Design' />
            </div>

            <section className='relative'>
                <h1 className='text-center font-monument text-xl'>Coca - Tech Startup Landing Page</h1>
                <Image src={ArrowGreen} alt='arrow-green' className='absolute right-4 top-6 cursor-pointer' />
            </section>
            <p className='text-[#666] font-Archivo text-center my-4 mx-4 text-sm'>
                We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.
            </p>
        </div>
    )
}

export default OurBestWorks