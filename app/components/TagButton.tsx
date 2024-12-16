import React from "react";

interface TagButtonProps {
    label: string;
}

const TagButton: React.FC<TagButtonProps> = ({ label }) => {
    return (
        <button
            className="px-4 py-2 bg-[#F0F0F0] text-[#222] rounded-full text-sm font-Archivo border border-[#E0E0E0] shadow-md hover:bg-[#E5E7EC] transition-all duration-300"
        >
            {label}
        </button>
    );
};

export default TagButton;
