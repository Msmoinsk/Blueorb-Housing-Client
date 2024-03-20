"use client"

import { toggleDarkMode } from '@/Store/themeSlice';
import SmallProfileCard from '@/components/SmallProfileCard';
import { primaryBlack, primaryGrey, textWhite } from '@/constants/index';
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';



function Header() {
    const theme = useSelector((state: any) => state.theme.darkMode)
    const isCurrentlyMobile = useSelector((state: any) => state.responsive.isMobile)
    const dispatch = useDispatch()



    return (
        <div className=' tablet:fixed w-[100vw] z-10'>
            <div className='flex w-full justify-between tablet:px-[5rem] px-[1rem] py-2 items-center border-b border-primaryGrey dark:bg-lightBlack bg-textWhite'>
                <div className='w-[30%] cursor-pointer'>
                    <img src="../Logo-blue-sm.png" alt="Logo" height={100} />
                </div>
                <div className='flex w-[30%] justify-end items-center'>

                    {!isCurrentlyMobile && (

                        <div
                            className='w-[10%] cursor-pointer'
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Notifications"
                        >
                            <IoNotificationsOutline size={20} color={`${primaryGrey}`} />
                        </div>
                    )}

                    <div className='cursor-pointer'><SmallProfileCard /></div>
                    <div
                        onClick={() => dispatch(toggleDarkMode())}
                        className='ml-4 hover:bg-[#dadada] rounded-xl cursor-pointer p-2'
                    >
                        {
                            theme ?
                                <>
                                    <MdOutlineLightMode size={30} color={`${textWhite}`} />
                                </>
                                :
                                <>
                                    <MdOutlineDarkMode size={30} color={`${primaryBlack}`} />
                                </>


                        }
                    </div>
                </div>

            </div>
            {!isCurrentlyMobile && (
                <div className='grid grid-cols-12 border-b  dark:bg-lightBlack bg-textWhite'>
                    <div className='sm:col-span-3'></div>
                    <div className='flex justify-around w-full font-[400] text-[18px] dark:text-textWhite sm:col-span-6'>
                        <div className='cursor-pointer hover:bg-primaryBlue px-6 py-2 hover:text-textWhite'>Home</div>
                        <div className='cursor-pointer hover:bg-primaryBlue px-6 py-2 hover:text-textWhite'>Projects</div>
                        <div className='cursor-pointer hover:bg-primaryBlue px-6 py-2 hover:text-textWhite'>Properties</div>
                        <div className='cursor-pointer hover:bg-primaryBlue px-6 py-2 hover:text-textWhite'>About</div>
                        <div className='cursor-pointer hover:bg-primaryBlue px-6 py-2 hover:text-textWhite'>Contact</div>
                    </div>
                    <div className=' sm:col-span-3'></div>
                </div>
            )}

        </div>
    )
}

export default Header