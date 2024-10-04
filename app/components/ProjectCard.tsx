import Image from 'next/image';
import star from '../assets/star.svg';

interface ProjectCardProps {
    h: string;
    w: string;
}

const ProjectCard = ({ h, w }: ProjectCardProps) => {
    return (
        <section
            className="relative bg-[#E5E7EC] mx-auto my-4 rounded-xl"
            style={{ width: w, height: h }}
        >
            <Image
                className="absolute -left-5 -top-2"
                src={star}
                alt="star"
                width={40}
                height={40}
            />
        </section>
    );
}

export default ProjectCard;
