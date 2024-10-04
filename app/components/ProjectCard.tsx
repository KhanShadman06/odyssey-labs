import Image from 'next/image';
import star from '../assets/star.svg';

interface ProjectCardProps {
    h: string;
    w: string;
    IsNew: boolean;
}

const ProjectCard = ({ h, w, IsNew = false }: ProjectCardProps) => {
    return (
        <section
            className="relative bg-[#E5E7EC] rounded-xl"
            style={{ width: w, height: h }}
        >
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
