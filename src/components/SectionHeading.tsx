import React from 'react'

interface SectionHeadingProps {
    text: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-center my-[40px]'>
            <div>{text}</div>
            <div className='border-2 rounded-xl border-primaryBlue w-[50%]'></div>
        </div>
    )
}

export default SectionHeading