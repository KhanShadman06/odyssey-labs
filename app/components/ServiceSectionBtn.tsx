import React from 'react';
import arrowDownActive from '../assets/arrow-down-gray.svg';
import arrowDownNonActive from '../assets/arrow-down-white.svg';
import Image from 'next/image';

interface ServiceSectionBtnProps {
    no: string;
    label: string;
    IsActive: boolean;
}

const ServiceSectionBtn = ({ no, label, IsActive }: ServiceSectionBtnProps) => {
    return (
        <div className={`flex justify-between items-center p-5 px-10 border-[#ddd] rounded-full m-5 ${IsActive ? 'bg-[#101010]' : 'border'}`}>
            <div className="flex items-center gap-2">
                <span className={`font-monument text-xl flex items-center leading-none ${IsActive ? 'text-[#9DFF50]' : 'text-[#444]'}`}>
                    {no}
                </span>
                <span className={`font-Archivo text-xl flex items-center leading-none ${IsActive ? 'text-white' : 'text-[#444]'}`}>
                    {label}
                </span>
            </div>
            <div className="flex items-center">
                {IsActive ? (
                    <Image src={arrowDownNonActive} alt="arrow-down" width={12} height={14} />
                ) : (
                    <Image src={arrowDownActive} alt="arrow-down" width={12} height={14} />
                )}
            </div>
        </div>
    );
}

export default ServiceSectionBtn;
