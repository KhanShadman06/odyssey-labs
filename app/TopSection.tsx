import React from 'react';

const TopSection = () => {
    return (
        <>
            {/* Header Section */}
            <section className="flex flex-col items-center justify-center mt-10">
                <div className="flex items-center gap-2">
                    {/* Technova (Green Box - Unchanged) */}
                    <h3
                        className="font-monument text-2xl font-bold bg-[#9DFF50] p-3 text-[#222] inline-block rounded-xl transform -skew-x-12 md:text-4xl"
                    >
                        Technova
                    </h3>

                    {/* Studio (Typography Updated) */}
                    <h1
                        className="font-[MonumentExtended] text-[24px] font-normal leading-[28.8px] text-white"
                    >
                        Studio
                    </h1>
                </div>

                {/* Subtitle */}
                <h2
                    className="text-white mt-3 font-[MonumentExtended] text-[18px] leading-[28.8px] text-center"
                >
                    Bangladesh–Based Digital Agency
                </h2>
            </section>
        </>
    );
};

export default TopSection;
