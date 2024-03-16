import { textWhite } from '@/constants';
import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

interface PorjectProps {
    projectImageOne: string
    developerLogo: string
    projectName: string
    developerName: string
    projectAddress: string
    projectCity: string
    flatTypes: string
    price: string
}

function Projects(props: PorjectProps) {

    const { projectImageOne,
        developerLogo,
        projectName,
        developerName,
        projectAddress,
        projectCity,
        flatTypes,
        price, } = props


    return (
        <div className='w-full border rounded-[8px]'>
            <div className='h-[300px] rounded-t bg-contain hover:bg-cover transition duration-800 ease-in-out' style={{ backgroundImage: `url(${projectImageOne})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            </div>
      

            <div className='flex justify-between  px-[1rem] py-4' >
            
                <div className='flex'>
                    <div className='mr-3 h-[80px] w-[80px]' style={{ backgroundImage: `url(${developerLogo})`, backgroundSize: "contain", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                    <div>
                        
                        <div className='font-[800] text-[24px] dark:text-textWhite'>{projectName}</div>
                        <div className='font-[600] text-textGrey'>{`by ${developerName}`}</div>
                        <div className='font-[600] text-textGrey'>{`${projectAddress},${projectCity}`}</div>
                    </div>
                </div>

                <div>
                    <div className='font-[600] text-textGrey'>{`${flatTypes}`}</div>
                    <div className=' flex justify-center items-center font-[600] text-textGrey'><BsCurrencyRupee /><span className='font-[800] text-lightBlack dark:text-textGrey'>{price}</span> &nbsp; Onwards</div>
                </div>
            </div>
        </div>
    )
}

export default Projects