import Image from 'next/image'
import React from 'react'
import star from '../../assets/star.svg'
import blackLine from '../../assets/line-black.svg'
import starblack from '../../assets/star-black.svg'
import ProjectCard from '../../components/ProjectCard'

const Contact = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-6 font-monument font-bold md:text-2xl lg:text-3xl xl:text-4xl'>
                <h1>Innovate</h1>
                <Image src={star} alt='star' className='w-[30px] md:w-[40px] xl:w-[60px]' />
                <h1>Inspire</h1>
                <Image src={star} alt='star' className='w-[30px] md:w-[40px] xl:w-[60px]' />
                <h1>Create</h1>
            </div>
            <div className='flex justify-between m-6'>
                <Image src={blackLine} alt='black line'/>
                <Image src={starblack} alt='black line' className='w-10 md:w-16 xl:w-20' />
                <Image src={blackLine} alt='black line' />
            </div>
            <section className='flex flex-col items-center my-4'>
                <ProjectCard className="w-[340px] h-[300px] lg:w-[500px] lg:h-[570px] min-h-[400px]" />
            </section>
            <section className='mx-6 text-center text-sm font-Archivo'>
                <p>{`Finding the right talent for your business can be a daunting task. Let Catalyst Studio's hiring agency take the guesswork out of the process and help you find the perfect fit for your team`}</p>

                <div className='my-6 flex justify-center gap-3 mb-10'>
                    <button className='font-Archivo bg-[#222222] py-4 px-8 text-white rounded-full'> Hire us </button>

                    <button className='font-Archivo border border-[#222222] py-4 px-8 text-black rounded-full'>Book Consultation</button>
                </div>

            </section>
        </>
    )
}

export default Contact