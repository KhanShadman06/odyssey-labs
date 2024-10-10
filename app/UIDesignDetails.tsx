import React from 'react'
import ProjectCard from './components/ProjectCard'
import ShowMoreBtn from './components/ShowMoreBtn'

const UIDesignDetails = () => {
    return (
        <div className='flex justify-between mx-5 gap-2'>
            <ProjectCard className="w-full sm:w-[300px] xl:w-[500px] h-auto min-h-[280px]" />
            <div className='flex flex-col justify-between'>
                <ShowMoreBtn label='See how we work' description='Ever wondered how design magic happens?' theme='dark' />
                <ShowMoreBtn label='Meet our expert' description='Looking for design experts who can bring your vision to life?' theme='primary' />
            </div>
        </div>
    )
}

export default UIDesignDetails