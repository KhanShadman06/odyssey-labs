import ProjectShowCase from "./ProjectShowCase";
import ServiceShowCase from "./ServiceShowCase";
import ServicesList from "./ServicesList";
import TopSection from "./TopSection";
import Image from 'next/image';
import starWhite from './assets/star-white.svg';
import HowItWorksSection from "./HowItWorksSection";
import OurBestWorks from "./OurBestWorks";
import TestimonialsList from "./TestimonialsList";
import Contact from "./Contact";
import SingleBox from "./SingleBox";
import TagButton from "@/app/components/TagButton";

const MainDetails = () => {
    return (
        <div>
            {/* Top Section */}
            <TopSection/>

            {/* Single Box Section */}
            <section className="relative flex flex-col items-center mt-8 gap-4">
                <SingleBox/>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex gap-3">
                    <TagButton label="UX Research"/>
                    <TagButton label="Wireframe"/>
                    <TagButton label="Visual Design"/>
                </div>
            </section>


            {/* Adjust spacing to avoid overlap */}
            <section className="relative bg-[#F6EFF4] pb-10 md:pb-16 -mt-16">
                <div className="absolute -top-10 left-0 right-0 h-36 bg-[#F6EFF4] transform skew-y-[2deg]"></div>
                <article className="relative pt-14">
                    <ProjectShowCase/>
                    <ServiceShowCase/>
                    <ServicesList/>
                </article>
            </section>

            {/* How It Works Section */}
            <section className="relative bg-[#222]">
                <div
                    className="absolute -top-9 left-0 right-0 h-20 bg-[#F6EFF4] transform -skew-y-[2deg] border-b-[20px] border-[#9DFF50]"></div>
                <Image
                    src={starWhite}
                    alt="star"
                    className="absolute top-24 left-2 md:left-10 lg:left-28 w-[20px] md:w-[30px]"
                />
                <Image
                    src={starWhite}
                    alt="star"
                    className="absolute top-96 right-6 w-[20px] md:w-[30px] md:right-10 lg:right-28"
                />
                <div className="absolute -right-[2.7rem] top-24 bg-[#333] text-white -rotate-90">
                    <p className="text-xs p-1 px-3 font-Archivo">HOW IT WORKS</p>
                </div>
                <article className="relative pt-44">
                    <HowItWorksSection/>
                </article>
            </section>

            {/* Our Best Works */}
            <section className="relative bg-white pb-10">
                <div className="absolute -top-7 left-0 right-0 h-20 bg-white transform -skew-y-[2deg]"></div>
                <article className="relative pt-5">
                    <OurBestWorks/>
                </article>
            </section>

            {/* Testimonials */}
            <section className="relative bg-[#222] pb-16">
                <div className="absolute -top-10 left-0 right-0 h-20 bg-white transform -skew-y-[2deg]"></div>
                <Image
                    src={starWhite}
                    alt="star"
                    className="absolute top-24 left-2 w-[20px]"
                />
                <Image
                    src={starWhite}
                    alt="star"
                    className="absolute top-6 right-6 w-[20px]"
                />
                <div className="absolute -right-[2.7rem] top-24 bg-[#333] text-white -rotate-90">
                    <p className="text-xs p-1 px-3 font-Archivo">HOW IT WORKS</p>
                </div>
                <article className="relative pt-44">
                    <TestimonialsList/>
                </article>
            </section>

            {/* Contact */}
            <section className="relative bg-white">
                <div className="absolute -top-10 left-0 right-0 h-20 bg-[#9DFF50] transform -skew-y-[2deg]"/>
                <div className="absolute -top-1 left-0 right-0 h-20 bg-white transform -skew-y-[3.7deg]"/>
                <article className="relative pt-24">
                    <Contact/>
                </article>
            </section>
        </div>
    );
};

export default MainDetails;
