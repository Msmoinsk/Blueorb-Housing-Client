"use client"

import { toggleDarkMode } from '@/Store/themeSlice';
import SmallProfileCard from '@/components/SmallProfileCard';
import { lightBlack, primaryBlack, primaryGrey, textGrey, textWhite } from '@/constants/index';
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';



function Header() {
    const theme = useSelector((state: any) => state.theme.darkMode)
    const dispatch = useDispatch()

    return (
        <div  >
            <div className='flex w-full justify-between sm:px-[5rem] sm:py-2 items-center border-b dark:bg-lightBlack'>
                <div className='w-[20%] cursor-pointer'>
                    <img src="../Logo-sm.png" alt="Logo" height={100} />
                </div>
                <div className='flex w-[30%] justify-end items-center'>
                    <div
                        className='w-[10%] cursor-pointer' data-tooltip-id="my-tooltip" data-tooltip-content="Notifications"><IoNotificationsOutline size={20} color={`${primaryGrey}`} /></div>
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
            <div className='flex w-[100%] py-4 border-b dark:bg-lightBlack'>
                <div className='w-[30%]'></div>
                <div className='flex justify-around w-full font-[600] text-[18px] dark:text-textWhite'>
                    <div className='cursor-pointer'>Home</div>
                    <div className='cursor-pointer'>Buy</div>
                    <div className='cursor-pointer'>Rent</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Contact</div>
                </div>
                <div className='w-[30%]'></div>
            </div>
        </div>
    )
}

export default Header