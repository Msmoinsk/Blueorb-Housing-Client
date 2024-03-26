import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline, IoPricetagOutline } from "react-icons/io5";

import { useState } from 'react';
import { primaryGrey, textWhite } from "@/constants";
import { FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdCurrencyRupee, MdOutlineBathroom, MdOutlineBedroomChild } from "react-icons/md";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { usePathname } from "next/navigation";

function PropertyCard() {

    const theme = useSelector((state: any) => state.theme.darkMode);
    const gridView = useSelector((state: any) => state.interface.gridView)
    const pathName = usePathname()

    const images = ['https://im.proptiger.com/1/1668085/6/oriana-elevation-107527621.jpeg?width=1336&height=768', 'https://dyimg2.realestateindia.com/prop_images/65297/788087_1.png', 'http://d131n82dij7gxv.cloudfront.net/upload/uploadedfiles/96311cba-6fe2-44fd-8d21-fff69807b3a3_1.PNG']

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handlePrevClick = () => {
        setCurrentImageIndex(prevIndex =>
            (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex(prevIndex =>
            (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        );
    };

    const propertyName = "Durga enclave";
    const propertyAddress = "mira road";
    const rooms = "2";
    const bathroom = "1";
    const price = "1 Cr"
    const area = "1200sqft";

    return (
        <div>

            {
                gridView && pathName === "/properties"
                    ?
                    <div className='flex gap-[100px] dark:bg-lightBlack p-5 rounded-xl bg-textWhite  cursor-pointer '>

                        <div style={{ backgroundImage: `url("${images[currentImageIndex]}")`, height: '200px' }} className='w-[300px] bg-cover bg-no-repeat flex justify-between items-center  rounded-lg '>

                            <div className="cursor-pointer hover:bg-lightBlack h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50 disable-selection" onClick={handlePrevClick}><IoArrowBackCircleOutline color={textWhite} size={40} /></div>

                            <div className="cursor-pointer hover:bg-lightBlack  h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50 disable-selection" onClick={handleNextClick}><IoArrowForwardCircleOutline color={textWhite} size={40} /></div>
                        </div>

                        <div className=" pb-3">
                            <div className=" font-[800] text-[32px]  dark:text-textWhite my-2">{propertyName}</div>
                            <div className="tablet:flex flex-col justify-start tablet:gap-2">
                                <div className="font-[600] text-[18px] text-textGrey flex items-center gap-[2px]">{theme ? <FaLocationDot color={textWhite} /> : <FaLocationDot />}{propertyAddress}</div>
                                <div className="font-[600] text-[18px] text-textGrey">{area}</div>
                            </div>

                            <div className="tablet:flex justify-start font-[600] laptop:text-[18px] text-textGrey my-2">
                                <div className="flex items-center gap-1">{theme ? <MdOutlineBedroomChild color={textWhite} /> : <MdOutlineBedroomChild />}{rooms} bedrooms</div>

                                <div className="flex items-center tablet:ml-5 gap-1">{theme ? <MdOutlineBathroom
                                    color={textWhite} /> : <MdOutlineBathroom />}{bathroom} bathrooms</div>
                            </div>


                        </div>
                        <div className="font-[800] text-[24px] flex items-center gap-[10px] dark:text-textWhite  py-2">{theme ? <MdCurrencyRupee color={textWhite} /> : <MdCurrencyRupee />}{price}</div>

                        <div className="tablet:flex flex-col w-[100px] items-start pt-3">
                            <Button text='View' style='bg-primaryRed w-full mobile:mb-2' />
                            <Button style='bg-white text-black p-2 w-full' icon={<CiHeart size={25} color={primaryGrey} />} />

                        </div>

                    </div>
                    :
                    <div className=' dark:bg-lightBlack p-5 rounded-xl bg-textWhite  cursor-pointer '>

                        <div style={{ backgroundImage: `url("${images[currentImageIndex]}")`, height: '200px' }} className=' bg-cover bg-no-repeat flex justify-between items-center  rounded-lg '>

                            <div className="cursor-pointer hover:bg-lightBlack h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50 disable-selection" onClick={handlePrevClick}><IoArrowBackCircleOutline color={textWhite} size={40} /></div>

                            <div className="cursor-pointer hover:bg-lightBlack  h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50 disable-selection" onClick={handleNextClick}><IoArrowForwardCircleOutline color={textWhite} size={40} /></div>
                        </div>

                        <div className=" pb-3">
                            <div className=" font-[800] text-[18px]  dark:text-textWhite my-2">{propertyName}</div>
                            <div className="tablet:flex justify-start tablet:gap-6">
                                <div className="font-[600] text-[14px] text-textGrey flex items-center gap-[2px]">{theme ? <FaLocationDot color={textWhite} /> : <FaLocationDot />}{propertyAddress}</div>
                                <div className="font-[600] text-[14px] text-textGrey">{area}</div>
                            </div>

                            <div className="tablet:flex justify-start font-[600] laptop:text-[14px] text-textGrey my-2">
                                <div className="flex items-center gap-1">{theme ? <MdOutlineBedroomChild color={textWhite} /> : <MdOutlineBedroomChild />}{rooms} bedrooms</div>

                                <div className="flex items-center tablet:ml-5 gap-1">{theme ? <MdOutlineBathroom
                                    color={textWhite} /> : <MdOutlineBathroom />}{bathroom} bathrooms</div>
                            </div>


                        </div>
                        <div className="font-[800] text-[18px] flex items-center gap-[10px] dark:text-textWhite border-b border-t border-primaryGrey py-2">{theme ? <MdCurrencyRupee color={textWhite} /> : <MdCurrencyRupee />}{price}</div>

                        <div className="tablet:flex justify-between items-start pt-3 tablet:gap-3">
                            <Button text='View' style='bg-primaryRed w-full mobile:mb-2' />
                            <Button style='bg-white text-black p-2' icon={<CiHeart size={25} color={primaryGrey} />} />

                        </div>

                    </div>
            }


        </div>
    )
}

export default PropertyCard