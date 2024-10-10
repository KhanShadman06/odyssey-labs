import React from 'react'
import DetailProjectCard from './components/DetailProjectCard'

const HowItWorksSection = () => {
    return (
        <div className='py-5 lg:px-40'>
            <h1 className='font-monument text-center text-3xl text-white md:text-4xl'>How our Design</h1>
            <h1 className='font-monument text-center text-3xl text-white md:text-4xl'>Process <span className='bg-[#9DFF50] rounded-xl px-2 py-1 text-black inline-block transform -skew-x-6'>Works</span></h1>
            <p className='text-[#aaa] font-Archivo mx-auto mt-5 text-center md:w-full md:max-w-2xl break-words'>
                Odyssey Labs follows a collaborative and iterative approach to design & develop, with a focus on understanding and meeting the unique needs of each client.
            </p>
            <section className='mt-10 flex flex-wrap justify-center gap-3'>
                <div className='flex flex-col md:flex-row md:w-1/2 gap-3'>
                    <DetailProjectCard no='01' title='Discovery' description='We start by getting to know our clients, their business goals, and their target audience.' />
                    <DetailProjectCard no='02' title='Strategy' description='We develop a strategy that outlines the design approach, user experience, and key features of the project.' />
                </div>
                <div className='flex flex-col md:flex-row md:w-1/2 gap-3'>
                    <DetailProjectCard no='03' title='Design' description='We create wireframes, mockups, and prototypes to visualize the design and gather feedback.' />
                    <DetailProjectCard no='04' title='Development' description='We bring the design to life through coding, ensuring a seamless user experience.' />
                </div>
            </section>
        </div>
    )
}

export default HowItWorksSection