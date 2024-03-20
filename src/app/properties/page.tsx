"use client"

import FilterSidebar from "@/components/FilterSidebar";
import PropertyCard from "@/components/PropertyCard";
import React from "react";
import { BsGrid } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import { useSelector } from "react-redux";

const properties: React.FC = () => {

    const theme = useSelector((state: any) => state.theme.darkMode)

    const filterApplied = ['2bhk', '50 Lakhs - 1 Cr']

    const numOfProperties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    return (
        <div className={`${theme ? 'dark' : ''} flex `}>
            <div className="dark:bg-primaryBlack  bg:text-textWhite">
                <FilterSidebar />
            </div>

            <div className="w-[85vw] bg-[#dadada] dark:bg-primaryBlack">
                <div className="px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col font-[600] text-[18px] dark:text-textWhite py-4">
                            1,235(Properties for sale)
                        </div>
                        <div className="flex gap-4">
                            {
                                filterApplied.map((item) => {
                                    return (
                                        <div key={item} className="flex  items-center gap-4 bg-primaryRed px-4 rounded-xl text-textWhite">
                                            {item}
                                            <div className="cursor-pointer">
                                                <IoClose />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex gap-4 bg-textWhite px-4 rounded-lg">
                            <div aria-label="Grid View" className="cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300"><BsGrid size={20} /></div>
                            <div aria-label="List View" className="cursor-pointer px-2 py-2 hover:scale-150 transition-transform duration-300"><TfiViewList size={20} /></div>
                            <div className="flex items-center gap-1 cursor-pointer px-2 py-2 hover:scale-105 transition-transform duration-300">
                                Clear Filter <CiUndo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 py-4 px-4">
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