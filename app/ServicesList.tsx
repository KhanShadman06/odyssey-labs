import React from 'react'
import ServiceSectionBtn from './components/ServiceSectionBtn'
import UIDesignDetails from './UIDesignDetails'

const ServicesList = () => {
    return (
        <div className='lg:px-40 md:flex justify-between'>
            <section>
                <ServiceSectionBtn IsActive no={`01`} label='UI/UX Design' />
                <div className='md:hidden'>
                    <UIDesignDetails />
                </div>
                <ServiceSectionBtn IsActive={false} no={`02`} label='Web Development' />
                <ServiceSectionBtn IsActive={false} no={`03`} label='SEO Optimization' />
            </section>
            <div className='hidden md:block'>
                <UIDesignDetails />
            </div>
        </div>
    )
}

export default ServicesList