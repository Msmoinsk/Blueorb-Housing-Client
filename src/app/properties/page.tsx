"use client"

import { toggleGridView } from "@/Store/interfaceSlice";
import { toggleDarkMode } from "@/Store/themeSlice";
import FilterSidebar from "@/components/FilterSidebar";
import PropertyCard from "@/components/PropertyCard";
import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";


const properties: React.FC = () => {

    const [selectedState, setSelectedState] = useState<string[]>([]);
    const theme: boolean = useSelector((state: any) => state.theme.darkMode);
    const gridView = useSelector((state: any) => state.interface.gridView);
    const dispatch = useDispatch();


    const numOfProperties: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const clearFilter = () => {
        setSelectedState([]);
    };

    const handleSelectState = (currentState: string) => {
        setSelectedState((prevState: string[]) => [...prevState, currentState]);

    };

    const onDeselectstate = (currentState: string) => {
        setSelectedState((prevCriteria: string[]) =>
            prevCriteria.filter((item) => item !== currentState)
        );
    };

    const data = {
        city: ['miraroad'],
        propertyType: ['1bhk', '2bhk', '3bhk', '4bhk', '5bhk'],
        priceRange: ['50 Lakhs - 1 Cr.', '1 Cr - 2 Cr', '3 Cr - 4 Cr', '4 Cr - 5 Cr'],
        text1: ['By city'],
        text2: ['By property'],
        text3: ["By price range"],
        onSelectState: handleSelectState,
        onDeselectstate: onDeselectstate,
    };

    return (
        <div className={`${theme ? 'dark' : ''} flex `}>
            <div className="dark:bg-bgColorDarkBlack  bg:text-textWhite">
                <FilterSidebar city={data.city}
                    propertyType={data.propertyType}
                    priceRange={data.priceRange}
                    text1={data.text1}
                    text2={data.text2}
                    text3={data.text3}
                    onSelectState={data.onSelectState}
                    onDeselectstate={data.onDeselectstate} />
            </div>

            <div className="w-[85vw] bg-[#dadada] dark:bg-bgColorDarkBlack ">
                <div className="px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col font-[600] text-[18px] dark:text-textWhite py-4">
                            1,235(Properties for sale)
                        </div>
                        <div className="flex gap-4">
                            {
                                selectedState.map((item: string, index: number) => {
                                    return (
                                        <div key={index} className="flex  items-center gap-4 bg-primaryRed px-4 rounded-xl text-textWhite">
                                            {item}
                                            <div className="cursor-pointer" onClick={() => onDeselectstate(item)}>
                                                <IoClose />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex gap-4 bg-textWhite px-4 rounded-lg">
                            {
                                gridView ? <div aria-label="Grid View" className="cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300 disable-selection" onClick={() => dispatch(toggleGridView())}><BsGrid size={20} /></div>
                                    : <div aria-label="List View" className="cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300 disable-selection" onClick={() => dispatch(toggleGridView())}><TfiViewList size={20} /></div>

                            }
                            <div className="flex items-center gap-1 cursor-pointer px-2 py-2 hover:scale-105 transition-transform duration-300" onClick={() => {
                                return clearFilter();
                            }}>
                                Clear Filter <CiUndo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${gridView ? '' : 'grid-cols-12'} grid  gap-4 py-4 px-4 `} >
                    {
                        numOfProperties.map((item) => {
                            return (
                                <div key={item} className="col-span-3">
                                    <PropertyCard />
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default properties