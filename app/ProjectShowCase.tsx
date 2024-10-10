import React from 'react'
import ProjectCard from './components/ProjectCard'

const ProjectShowCase = () => {
    return (
        <>
            <section className='sm:px-10 md:px-20 lg:px-40 md:flex justify-center gap-5'>
                <h1 className="text-[#222222] font-monument text-2xl p-4 flex-grow w-full md:p-0">Digital thinkers. <br />
                    Small studios build awesome design.</h1>
                <p className="text-[#444444] font-Archivo px-4 pb-4 text-sm w-auto md:p-0">
                    Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome designs.
                </p>
            </section>

            <section className="px-6 sm:px-10 md:px-20 lg:px-40 flex md:flex-row flex-col gap-6 justify-around items-center">
                <ProjectCard className="w-full sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[350px] h-auto min-h-[264px]" IsNew />
                <ProjectCard className="w-full sm:w-[300px] sm:h-[400px] lg:w-[500px] lg:h-[570px] h-auto min-h-[400px]" />
            </section>

        </>
    )
}

export default ProjectShowCase