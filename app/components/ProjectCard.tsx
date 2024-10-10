import Image from 'next/image';
import star from '../assets/star.svg';

interface ProjectCardProps {
    IsNew?: boolean;
    className?: string;
}

const ProjectCard = ({ IsNew = false, className = '' }: ProjectCardProps) => {
    return (
        <section className={`relative bg-[#E5E7EC] rounded-xl ${className}`}>
            <Image
                className="absolute -left-5 -top-2"
                src={star}
                alt="star"
                width={40}
                height={40}
                hidden={!IsNew}
            />
        </section>
    );
}

export default ProjectCard;
