
interface DetailProjectCardProps {
    no: string
    title: string
    description: string
    image?: string
}

const DetailProjectCard = ({ no, title, description }: DetailProjectCardProps) => {
    return (
        <div className='bg-[#2a2a2a] w-[340px] h-[380px] rounded-xl'>
            <h1 className='font-monument text-3xl text-[#666] p-5'>{no}</h1>
            <div className='w-[295px] h-[173px] bg-[#E5E7EC] mx-auto rounded-2xl' />
            <h1 className='font-monument text-2xl ml-6 mt-4 text-white'>{title}</h1>
            <p className='font-Archivo mx-6 text-[#ddd] text-[0.8rem] mt-3'>{description}</p>
        </div>
    )
}

export default DetailProjectCard