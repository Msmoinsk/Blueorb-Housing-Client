import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import { useState } from 'react';
import { textWhite } from "@/constants";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { MdOutlineBathroom, MdOutlineBedroomChild } from "react-icons/md";
function PropertyCard() {

    const theme = useSelector((state: any) => state.theme.darkMode);

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

    const propertName = "Durga enclave";
    const propertyAddress = "mira road";
    const rooms = "2";
    const bathroom = "1";
    const price = "1,00,00,000"
    const area = "1200sqft";

    return (
        <div className='dark:bg-lightBlack p-5 rounded-xl bg-textWhite '>

            <div style={{ backgroundImage: `url("${images[currentImageIndex]}")`, height: '200px' }} className='bg-cover bg-no-repeat flex justify-between items-center  rounded-lg '>

                <div className="cursor-pointer hover:bg-lightBlack h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50" onClick={handlePrevClick}><IoArrowBackCircleOutline color={textWhite} size={40} /></div>
                <div className="cursor-pointer  hover:bg-lightBlack  h-[100%] flex items-center hover:rounded-lg px-2 hover:opacity-50" onClick={handleNextClick}><IoArrowForwardCircleOutline color={textWhite} size={40} /></div>
            </div>

            <div className="border-b border-lightBlack pb-5">
                <div className=" font-[800] text-[24px]  dark:text-textWhite my-2">{propertName}</div>
                <div className="font-[600] text-[18px] text-textGrey flex items-center gap-[2px]">{theme ? <FaLocationDot color={textWhite} /> : <FaLocationDot />}{propertyAddress}</div>

                <div className="md:flex justify-start font-[600] text-[18px] text-textGrey my-2">
                    <div className="flex items-center">{theme ? <MdOutlineBedroomChild color={textWhite} /> : <MdOutlineBedroomChild />}{rooms} bedrooms</div>
                    <div className="flex items-center md:ml-5 ">{theme ? <MdOutlineBathroom
                        color={textWhite} /> : <MdOutlineBathroom />}{bathroom} bathrooms</div>
                </div>

                <div className="font-[600] text-[18px] text-textGrey">{area}</div>
            </div>
            <div className="font-[800] text-[24px]">{price}</div>

        </div>
    )
}

export default PropertyCard