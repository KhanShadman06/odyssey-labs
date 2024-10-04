import React from 'react'
const ServiceTag = ({ tag }: { tag: string }) => {
    return (
        <div className='bg-[#F0F0F0] text-[#888888] font-Archivo inline px-4 py-1 rounded-full whitespace-nowrap'>{tag}</div>
    )
}

export default ServiceTag