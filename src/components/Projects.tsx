import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";

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
        <div className=' border rounded-[8px]'>
            <div className=' tablet:w-full tablet:h-[300px] rounded-t bg-cover ' style={{ backgroundImage: `url(${projectImageOne})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </div>
            <div className='flex justify-between px-[1rem] py-4' >
                <div className='flex'>
                    <div className='mr-2 h-[80px] w-[80px]' style={{ backgroundImage: `url(${developerLogo})`, backgroundSize: "contain", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                    <div>
                        <div className='font-[800] desktop:text-[18px] dark:text-textWhite'>{projectName}</div>
                        <div className='font-[600] desktop:text-[14px] text-textGrey'>{`by ${developerName}`}</div>
                        <div className='font-[600] desktop:text-[14px] text-textGrey'>{`${projectAddress},${projectCity}`}</div>
                    </div>
                </div>

                <div className='flex flex-col items-end'>
                    <div className='font-[600] text-textGrey'>{`${flatTypes}`}</div>
                    <div className='flex flex-col font-[600] text-textGrey desktop:text-[15px]'>
                        <div className='flex justify-center items-center '><BsCurrencyRupee /><span className='font-[800] text-lightBlack dark:text-textGrey '>{price}</span></div>
                        <div>Onwards</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects