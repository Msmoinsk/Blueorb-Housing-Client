"use client"
import { toggleGridView } from "@/Store/interfaceSlice";
import { toggleDarkMode } from "@/Store/themeSlice";
import FeaturedProjects from "@/components/FeaturedProjects";
import FilterSidebar from "@/components/FilterSidebar";
import PopularProjects from "@/components/PopularProjects";
import Projects from "@/components/Projects";
import PropertyCard from "@/components/PropertyCard";
import { Theme } from "@radix-ui/themes";
import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { DiVim } from "react-icons/di";
import { IoClose } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  
    const [selectedState, setSelectedState] = useState<string[]>([]);
    const theme = useSelector((state: any) => state.theme.darkMode);
    const gridView = useSelector((state: any) => state.interface.gridView);
    const dispatch = useDispatch();
    const numOfProperties: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


    const clearFilter = () => {
        setSelectedState([]);
    };

    const handleSelectState = (currentState: string) => {
        console.log(currentState);
        setSelectedState((prevState: string[]) => [...prevState, currentState]);

    };

    const onDeselectstate = (currentState: string) => {
        setSelectedState((prevCriteria: string[]) =>
            prevCriteria.filter((item) => item !== currentState)
        );
    };

    const data = {
        city: ['miraroad'],
        devlopers: ['L&T', 'anmol', 'JP', 'cheeda', 'heritage'],
        agents: ['shivang tiwari', 'akash pandey', 'himanshu pandey'],
        text1: ['By city'],
        text2: ['By devlopers'],
        text3: ["available agents"],
        onSelectState: handleSelectState,
        onDeselectstate: onDeselectstate,
    }


    return (
        <div className={`${theme ? 'dark' : ''} flex `}  >
            <div className="dark:bg-bgColorDarkBlack  bg:text-textWhite">
                <FilterSidebar city={data.city}
                    propertyType={data.devlopers}
                    priceRange={data.agents}
                    text1={data.text1}
                    text2={data.text2}
                    text3={data.text3}
                    onSelectState={data.onSelectState}
                    onDeselectstate={data.onDeselectstate}
                />
            </div>

            <div className="w-[85vw] bg-[#dadada] dark:bg-bgColorDarkBlack  ">

                <div className="px-4">
                    <div className=" flex justify-between items-center">
                        <div className=" flex flex-col font-[600] text-[18px] dark:text-textWhite py-4">
                            1,235(Properties for sale)
                        </div>
                        <div className="flex gap-4">
                            {selectedState.map((item: string, index: number) => (
                                <div key={index} className="flex items-center gap-4 bg-primaryRed px-4 rounded-xl text-textWhite">
                                    {item}
                                    <div className="cursor-pointer bg-bl" onClick={() => onDeselectstate(item)}>
                                        <IoClose />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 bg-textWhite px-4 rounded-lg">
                            {
                                gridView ? <div aria-label="Grid View" className=" cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300 disable-selection" onClick={() => {
                                    return dispatch(toggleGridView())
                                }}><BsGrid size={20} /></div> : <div aria-label="List View" className="cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300 disable-selection" onClick={() => { return dispatch(toggleGridView()) }}><TfiViewList size={20} /></div>
                            }

                            <div className="flex items-center gap-1 cursor-pointer px-2 py-2 hover:scale-105 transition-transform duration-300" onClick={() => {
                                return clearFilter()
                            }}>
                                Clear Filter <CiUndo />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`${gridView ? 'grid-cols-6' : 'grid-cols-12'} grid  gap-4 py-4 px-4 `} >
                    {
                        numOfProperties.map((item) => {
                            return (
                                <div key={item} className="col-span-3">

                                    <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page
