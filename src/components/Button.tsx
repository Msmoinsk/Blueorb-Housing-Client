import React, { MouseEventHandler } from 'react'

interface ButtonProps {
    style?: string,
    onClickHandler?: MouseEventHandler<HTMLDivElement>,
    icon?: React.ReactNode
    text?: string
}

function Button(props: ButtonProps) {
    const { style, onClickHandler, icon, text } = props

    return (
        <div className={` py-2 rounded-[12px] cursor-pointer bg-primaryBlue font-[600]  text-textWhite searchButtonStyles hover:shadow-md hover:scale-105 transition-transform duration-300 disable-selection ${style}`} onClick={onClickHandler}>
            {
                icon ? <div className='flex justify-center items-center'>
                    <div>{icon}</div>
                    <div className=' text-[18px]'>{text}</div>
                </div> :
                    <div className='flex justify-center'>
                        <div>{text}</div>
                    </div>
            }

        </div>
    )
}

export default Button