import { textWhite } from '@/constants';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useSelector } from 'react-redux';
function Footer() {

    const theme = useSelector((state: any) => state.theme.darkMode);
    return (
        <div className='bg-textWhite pt-[6rem] pb-[1.5rem] px-[5rem] dark:bg-lightBlack'>
            <div className='border-b pb-5 border-lightBlack dark:border-textWhite'>
                <img src="../Logo-blue-sm.png" alt="" />
            </div>

            <div className='flex justify-between mt-[2rem] border-b border-lightBlack dark:border-textWhite pb-[9rem]'>

                <div>
                    <div className='font-[800] text-[20px] dark:text-textWhite'>About Us</div>
                    <div className=' dark:text-textWhite mt-3  cursor-pointer'>Our team</div>
                    <div className=' dark:text-textWhite mt-3 cursor-pointer'>Contact Us</div>
                </div>

                <div>
                    <div className='font-[800] text-[20px] dark:text-textWhite '>Navigate</div>
                    <div className=' dark:text-textWhite mt-3 cursor-pointer'>Buy</div>
                    <div className=' dark:text-textWhite mt-3 cursor-pointer'>rent</div>
                </div>

                <div>
                    <div className='font-[800] text-[20px] dark:text-textWhite'>Legal</div>
                    <div className=' dark:text-textWhite mt-3 cursor-pointer'>Privacy Policy</div>
                    <div className=' dark:text-textWhite mt-3 cursor-pointer'>Tearms & condition</div>
                </div>

                <div>
                    <div className='mt-4 cursor-pointer'>{theme ? <FaInstagram color={textWhite} size={20} /> : <FaInstagram size={20} />}</div>
                    <div className='mt-4 cursor-pointer'>{theme ? <FaLinkedin color={textWhite} size={20} /> : <FaLinkedin size={20} />}</div>
                    <div className='mt-4 cursor-pointer'>{theme ? <FaFacebook color={textWhite} size={20} /> : <FaFacebook size={20} />}</div>
                </div>

            </div>

            <div className='flex justify-between pt-6 dark:text-textGrey'>
                <div className='font-[800]'>All rights reserved</div>
                <div className='font-[800]'> @2024 Blueorb </div>
            </div>

        </div>
    )
}

export default Footer