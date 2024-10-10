import React from 'react'

const TopSection = () => {
    return (
        <>
            <section className="flex mx-10 gap-5 justify-center items-center mt-10">
                <h3 className="font-monument text-2xl font-bold bg-[#9DFF50] p-3 text-[#222] inline-block rounded-xl transform -skew-x-12 md:text-4xl" >Odyssey</h3> <h1 className="inline-block text-2xl text-white font-monument md:text-4xl">
                    Labs
                </h1>
            </section>
            <h1 className="p-2 text-white font-monument text-center mt-3 md:text-2xl">
                Bangladesh-Based Digital Agency
            </h1>
            <p className="font-Archivo text-center text-[#ddd] p-3 mt-2 md:max-w-3xl md:mx-auto">
                Odyssey Labs is a dynamic and innovative design agency that brings creative ideas to life. We work with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.
            </p>
        </>
    )
}

export default TopSection