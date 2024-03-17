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
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            if (container) {
                //for refference and getting the numbers from the console log
                console.log('scrollLeft:', container.scrollLeft);
                console.log('scrollWidth:', container.scrollWidth);
                console.log('clientWidth:', container.clientWidth);
                setScrollLeft(container.scrollLeft);
                setShowLeftArrow(container.scrollLeft > 277.2727355957031);
                setShowRightArrow(container.scrollLeft < 3404.54541015625);
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
            container.scrollTo({
                left: container.scrollLeft - 300,
                behavior: 'smooth'
            });
        }
    };

    const handleScrollRight = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                left: container.scrollLeft + 300,
                behavior: 'smooth'
            });
        }
    };
    const gridSTyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '4px'
    }


    return (
        <>
            <div className=" flex overflow-x-auto items-center  cursor-pointer" style={{ scrollbarWidth: "none" }} ref={containerRef}>

                <div className="absolute left-0 w-[5rem] hover:shadow-md hover:scale-[1.5] transition-transform duration-300">

                    {showLeftArrow && <MdOutlineKeyboardArrowLeft className="cursor-pointer absolute top-1/2 transform -translate-y-1/2  " style={{ fontSize: '5rem', color: theme ? primaryGrey : primaryBlue }} onClick={handleScrollLeft} />}

                </div>

                <div className="grid grid-flow-col gap-4">

                    <div className='tablet:w-[40rem] desktop:w-[40rem]' >
                        <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                    <div className='tablet:w-[40rem] desktop:w-[40rem]'>
                        <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
                    </div>
                </div>
                <div className="absolute right-0 w-[5rem] hover:shadow-md hover:scale-[1.5] transition-transform duration-300">

                    {showRightArrow && <MdOutlineKeyboardArrowRight className=" cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2"
                        style={{ fontSize: '5rem', color: theme ? primaryGrey : primaryBlue }} onClick={handleScrollRight} />}

                </div>
            </div>

        </>

    )
}

export default FeaturedProjects
