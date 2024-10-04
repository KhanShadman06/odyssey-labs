import ProjectShowCase from "./ProjectShowCase"
import ServiceShowCase from "./ServiceShowCase"
import ServicesList from "./ServicesList"
import TopSection from "./TopSection"

const MainDetails = () => {
    return (
        <div>

            <TopSection />
            <article className="bg-white">
                <ProjectShowCase />
                <ServiceShowCase />
                <ServicesList />
            </article>
        </div>
    )
}

export default MainDetails