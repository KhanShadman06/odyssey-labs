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
            <section className="relative z-10 flex md:justify-center items-start overflow-y-clip overflow-x-scroll pt-5">
                <div className='w-full max-w-[190px] max-h-[190px] min-w-[190px] min-h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl rotate-6 border-white ml-6 z-10' />
                <div className='w-full max-w-[190px] max-h-[190px] min-w-[190px] min-h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl -rotate-6 border-white mt-5' />

                <div className='w-full max-w-[190px] max-h-[190px] min-w-[190px] min-h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl rotate-6 border-white ml-6 z-10' />
                <div className='w-full max-w-[190px] max-h-[190px] min-w-[190px] min-h-[190px] bg-[#E5E7EC] border-[5px] rounded-xl -rotate-6 border-white mt-5' />
            </section>

            <section className="relative bg-[#F6EFF4] pb-10">
                <div className="absolute -top-24 left-0 right-0 h-36 bg-[#F6EFF4] transform skew-y-[2deg]"></div>
                <article className="relative z-1 pt-14">
                    <ProjectShowCase />
                    <ServiceShowCase />
                    <ServicesList />
                </article>
            </section>
            <section className="relative bg-[#222]">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform skew-y-[8deg] border-b-[20px] border-[#9DFF50]"></div>
                <Image src={starWhite} alt='star' className='absolute top-24 left-2 w-[20px]' />
                <Image src={starWhite} alt='star' className='absolute top-96 right-6 w-[20px]' />
                <div className='absolute -right-[2.7rem] top-24 bg-[#333] text-white -rotate-90'>
                    <p className="text-xs p-1 px-3 font-Archivo">HOW IT WORKS</p>
                </div>
                <article className="relative z-10 pt-44">
                    <HowItWorksSection />
                </article>
            </section>

            <section className="relative bg-white pb-10">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform skew-y-[8deg]"></div>
                <article className="relative pt-5">
                    <OurBestWorks />
                </article>
            </section>

            <section className="relative bg-[#222] pb-16">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform skew-y-[8deg]"></div>
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
                <div className="absolute -top-7 left-0 right-0 h-20 bg-[#9DFF50] transform skew-y-[8deg]" />
                <div className="absolute -top-1 left-0 right-0 h-20 bg-white transform -skew-y-[15deg]" />

                <article className="relative z-10 pt-24">
                    <Contact />
                </article>
            </section>

        </div>
    );
};

export default MainDetails;
