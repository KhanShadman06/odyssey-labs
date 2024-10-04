import ProjectShowCase from "./ProjectShowCase"
import ServiceShowCase from "./ServiceShowCase"
import TopSection from "./TopSection"

const MainDetails = () => {
    return (
        <div>

            <TopSection />
            <article className="bg-white">
                <ProjectShowCase />
                <ServiceShowCase />
            </article>
        </div>
    )
}

export default MainDetails