import ProjectCard from "./components/ProjectCard"

const MainDetails = () => {
    return (
        <div>
            <section className="flex mx-10 gap-5 items-center mt-10">
                <h3 className="font-monument text-2xl font-bold bg-[#9DFF50] p-3 text-[#222] inline-block rounded-xl transform -skew-x-12" >Odyssey</h3>
                <h1 className="inline-block text-2xl text-white font-monument">
                    Labs
                </h1>
            </section>
            <h1 className="p-2 text-white font-monument text-center mt-3">
                Bangladesh-Based Digital Agency
            </h1>
            <p className="font-Archivo text-center text-[#ddd] p-3 mt-2">
                Odyssey Labs is a dynamic and innovative design agency that brings creative ideas to life.  We works with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.
            </p>

            <article className="bg-white">
                <h1 className="text-[#222222] font-monument text-2xl p-4">Digital thinkers. <br />
                    Small studios build awesome design.</h1>
                <p className="text-[#444444] font-Archivo px-4 pb-4 text-sm">
                    Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome designs.
                </p>
                <section>
                    <ProjectCard w="343px" h="264px" IsNew/>
                    <ProjectCard w="343px" h="570px" />
                </section>

            </article>
        </div>
    )
}

export default MainDetails