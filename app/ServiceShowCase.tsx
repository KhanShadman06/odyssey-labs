import React from 'react'

const ServiceShowCase = () => {
    return (
        <>
            <section className="flex ml-6 gap-5 items-center mt-10">
                <h1 className="inline-block text-2xl text-[#222] font-monument">
                    Our
                </h1>
                <h3 className="font-monument text-2xl font-bold bg-[#9DFF50] p-3 text-[#222] inline-block rounded-xl transform -skew-x-12" >Services</h3>
            </section>
            <section className="flex mb-10">
                <p className="font-Archivo text-[#444] mx-6 mt-5 text-sm w-3/4">
                    Odyssey Labs offers a range of services to help you achieve your goals. From branding and web design to development and operations, we have the skills and experience to help you succeed.
                </p>
                <div className='absolute -right-[2.4rem] bg-[#9DFF50] -rotate-90'>
                    <p className="text-xs p-1 px-3 font-Archivo">WHAT WE DO</p>
                </div>
            </section>
        </>
    )
}

export default ServiceShowCase