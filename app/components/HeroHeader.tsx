import React from 'react';

const HeroHeader = () => {
    return (
        <div className="text-center py-10">
            {/* Technova Studio */}
            <div className="flex items-center justify-center gap-2">
                {/* Technova */}
                <div
                    className="bg-[#9DFF50] px-4 py-1 rounded-lg"
                    style={{ borderRadius: '8px' }}
                >
                    <span
                        className="text-[#222222] text-[24px] sm:text-[20px] md:text-[24px] leading-[28.8px] font-normal"
                        style={{ fontFamily: 'Monument Extended' }}
                    >
                        Technova
                    </span>
                </div>
                {/* Studio */}
                <span
                    className="text-white text-[24px] sm:text-[20px] md:text-[24px] leading-[28.8px] font-normal"
                    style={{ fontFamily: 'Monument Extended' }}
                >
                    Studio
                </span>
            </div>

            {/* Subtitle */}
            <p
                className="text-white text-[18px] sm:text-[14px] md:text-[18px] mt-4 leading-[28px]"
                style={{ fontFamily: 'Monument Extended', textAlign: 'center' }}
            >
                Bangladesh–Based Digital Agency
            </p>
        </div>
    );
};

export default HeroHeader;
