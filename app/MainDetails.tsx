import ProjectShowCase from "./ProjectShowCase";
import ServiceShowCase from "./ServiceShowCase";
import ServicesList from "./ServicesList";
import TopSection from "./TopSection";
import Image from 'next/image'
import starWhite from './assets/star-white.svg'
import HowItWorksSection from "./HowItWorksSection";
import OurBestWorks from "./OurBestWorks";
import TestimonialsList from "./TestimonialsList";
import Contact from "./Contact";

const MainDetails = () => {
    return (
        <div>
            <TopSection />
            <section className="relative z-10 flex overflow-x-auto xl:justify-center items-start p-10 space-x-6">
                <div className="w-full max-w-[290px] max-h-[290px] min-w-[150px] min-h-[150px] sm:min-w-[190px] sm:min-h-[190px] md:min-w-[290px] md:min-h-[290px] bg-[#E5E7EC] border-[5px] rounded-xl rotate-6 border-white z-10" />
                <div className="w-full max-w-[290px] max-h-[290px] min-w-[150px] min-h-[150px] sm:min-w-[190px] sm:min-h-[190px] md:min-w-[290px] md:min-h-[290px] bg-[#E5E7EC] border-[5px] rounded-xl -rotate-6 border-white" />

                <div className="w-full max-w-[290px] max-h-[290px] min-w-[150px] min-h-[150px] sm:min-w-[190px] sm:min-h-[190px] md:min-w-[290px] md:min-h-[290px] bg-[#E5E7EC] border-[5px] rounded-xl rotate-6 border-white z-10" />
                <div className="w-full max-w-[290px] max-h-[290px] min-w-[150px] min-h-[150px] sm:min-w-[190px] sm:min-h-[190px] md:min-w-[290px] md:min-h-[290px] bg-[#E5E7EC] border-[5px] rounded-xl -rotate-6 border-white" />
            </section>

            <section className="relative bg-[#F6EFF4] pb-10 md:pb-16">
                <div className="absolute -top-24 left-0 right-0 h-36 bg-[#F6EFF4] transform skew-y-[2deg]"></div>
                <article className="relative pt-14">
                    <ProjectShowCase />
                    <ServiceShowCase />
                    <ServicesList />
                </article>
            </section>
            <section className="relative bg-[#222]">
                <div className="absolute -top-9 left-0 right-0 h-20 bg-[#F6EFF4] transform -skew-y-[2deg] border-b-[20px] border-[#9DFF50]"></div>
                <Image src={starWhite} alt='star' className='absolute top-24 left-2 md:left-10 lg:left-28 w-[20px] md:w-[30px]' />
                <Image src={starWhite} alt='star' className='absolute top-96 right-6 w-[20px] md:w-[30px] md:right-10 lg:right-28' />
                <div className='absolute -right-[2.7rem] top-24 bg-[#333] text-white -rotate-90'>
                    <p className="text-xs p-1 px-3 font-Archivo">HOW IT WORKS</p>
                </div>
                <article className="relative z-10 pt-44">
                    <HowItWorksSection />
                </article>
            </section>

            <section className="relative bg-white pb-10">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform -skew-y-[2deg]"></div>
                <article className="relative pt-5">
                    <OurBestWorks />
                </article>
            </section>

            <section className="relative bg-[#222] pb-16">
                <div className="absolute -top-10 left-0 right-0 h-20 bg-white transform -skew-y-[2deg]"></div>
                <Image src={starWhite} alt='star' className='absolute top-24 left-2 w-[20px]' />
                <Image src={starWhite} alt='star' className='absolute top-6 right-6 w-[20px]' />
                <div className='absolute -right-[2.7rem] top-24 bg-[#333] text-white -rotate-90'>
                    <p className="text-xs p-1 px-3 font-Archivo">HOW IT WORKS</p>
                </div>
                <article className="relative z-10 pt-44">
                    <TestimonialsList />
                </article>
            </section>

            <section className="relative bg-white">
                <div className="absolute -top-10 left-0 right-0 h-20 bg-[#9DFF50] transform -skew-y-[2deg]" />
                <div className="absolute -top-1 left-0 right-0 h-20 bg-white transform -skew-y-[3.7deg]" />

                <article className="relative z-10 pt-24">
                    <Contact />
                </article>
            </section>

        </div>
    );
};

export default MainDetails;
