import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Projects from './Projects';
import { useSelector } from 'react-redux';
import { primaryBlue, primaryGrey } from '@/constants';

const FeaturedProjects = () => {

    const theme = useSelector((state: any) => state.theme.darkMode)

    const [scrollLeft, setScrollLeft] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            if (container) {
                setScrollLeft(container.scrollLeft);
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(container.scrollLeft < (container.scrollWidth - container.clientWidth));
            }
        };

        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    const handleScrollLeft = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft -= 300;
            setScrollLeft((prevScrollLeft) => prevScrollLeft - 300);
        }
    };

    const handleScrollRight = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += 300;
            setScrollLeft((prevScrollLeft) => prevScrollLeft + 300);
        }
    };

    return (
        <>
            <div className=" flex overflow-x-auto items-center  cursor-pointer" style={{ scrollbarWidth: "none" }} ref={containerRef}>
                {/* <Button  style="tablet:left-[5rem] absolute h-[20px] rounded-[100%] flex items-center justify-center py-[1rem] px-[1rem]" icon={<MdOutlineKeyboardArrowLeft />}  onClickHandler={handleScrollRight} /> */}
                <div className="absolute left-0 w-[5rem]">


                    {showLeftArrow && <MdOutlineKeyboardArrowLeft className="cursor-pointer absolute top-1/2 transform -translate-y-1/2" style={{ fontSize: '5rem', color: theme ? primaryGrey : primaryBlue }} onClick={handleScrollLeft} />}
                </div>

                <div className="grid grid-flow-col gap-[2rem]">
                    <div className="">
                        <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                </div>
                <div className="absolute right-0 w-[5rem]">
                    {showRightArrow && <MdOutlineKeyboardArrowRight className=" cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2" style={{ fontSize: '5rem', color: theme ? primaryGrey : primaryBlue }} onClick={handleScrollRight} />}  </div>
            </div>

        </>

    )
}

export default FeaturedProjects
