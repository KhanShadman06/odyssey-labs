import React from 'react'
import DetailProjectCard from './components/DetailProjectCard'

const HowItWorksSection = () => {
    return (
        <div className='py-5'>
            <h1 className='font-monument text-center text-3xl text-white'>How our Design</h1>
            <h1 className='font-monument text-center text-3xl text-white'>Process <span className='bg-[#9DFF50] rounded-xl px-2 py-1 text-black inline-block transform -skew-x-6'>Works</span></h1>
            <p className='text-[#aaa] font-Archivo mx-6 mt-5 text-center'>
                Odyssey Labs follows a collaborative and iterative approach to design & develop, with a focus on understanding and meeting the unique needs of each client.
            </p>
            <section className='mt-10 flex flex-col items-center gap-3'>
                <DetailProjectCard no='01' title='Discovery' description='We start by getting to know our clients, their business goals, and their target audience.' />
                <DetailProjectCard no='02' title='Strategy' description='We develop a strategy that outlines the design approach, user experience, and key features of the project.' />
                <DetailProjectCard no='03' title='Strategy' description='We develop a strategy that outlines the design approach, user experience, and key features of the project.' />
                <DetailProjectCard no='04' title='Strategy' description='We develop a strategy that outlines the design approach, user experience, and key features of the project.' />
            </section>
        </div>
    )
}

export default HowItWorksSection