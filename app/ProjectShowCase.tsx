import React from 'react'
import ProjectCard from './components/ProjectCard'

const ProjectShowCase = () => {
    return (
        <>
            <h1 className="text-[#222222] font-monument text-2xl p-4">Digital thinkers. <br />
                Small studios build awesome design.</h1>
            <p className="text-[#444444] font-Archivo px-4 pb-4 text-sm">
                Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome designs.
            </p>
            <section>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <ProjectCard w="343px" h="264px" IsNew />
                    <ProjectCard w="343px" h="570px" />
                </div>
            </section>
        </>
    )
}

export default ProjectShowCase