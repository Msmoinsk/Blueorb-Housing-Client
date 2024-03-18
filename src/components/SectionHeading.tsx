import React from 'react'
import Button from './Button'

interface SectionHeadingProps {
  text: string
}

const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <>
      <div className='flex justify-center py-[80px]' >
        <div className={`flex flex-col items-center`}>
          <div className="flex justify-center font-[600] text-[30px] dark:text-textWhite pb-[8px]">{props.text}</div>
          <div className=" w-[40%] border-b border-[5px] px-2 rounded-full border-primaryBlue"></div>
        </div>
      </div>
   
    </>
  )
}

export default SectionHeading
