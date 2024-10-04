import React from 'react'
import ProjectCard from './components/ProjectCard'
import ShowMoreBtn from './components/ShowMoreBtn'

const UIDesignDetails = () => {
    return (
        <div className='flex justify-between mx-5'>
            <ProjectCard w="212px" h="280px" IsNew={false} />
            <div className='flex flex-col justify-between'>
                <ShowMoreBtn label='See how we work' description='Ever wondered how design magic happens?' theme='dark' />
                <ShowMoreBtn label='Meet our expert' description='Looking for design experts who can bring your vision to life?' theme='primary' />
            </div>
        </div>
    )
}

export default UIDesignDetails