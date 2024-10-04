import ProjectShowCase from "./ProjectShowCase";
import ServiceShowCase from "./ServiceShowCase";
import ServicesList from "./ServicesList";
import TopSection from "./TopSection";

const MainDetails = () => {
    return (
        <div>
            <TopSection />
            <section className="absolute z-10 mt-10 flex">
                <div className='w-[190px] h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl rotate-6 border-white ml-6 z-10' />
                <div className='w-[190px] h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl -rotate-6 border-white mt-5' />
            </section>

            <section className="relative bg-white mt-60 pb-10">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform skew-y-[8deg]"></div>
                <article className="relative z-1 pt-14">
                    <ProjectShowCase />
                    <ServiceShowCase />
                    <ServicesList />
                </article>
            </section>

            <section className="relative bg-[#222] h-[600px]">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform -skew-y-[8deg] border-b-[20px] border-[#9DFF50]"></div>
            </section>
        </div>
    );
};

export default MainDetails;
