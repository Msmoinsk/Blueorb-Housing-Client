import React from "react";

const FilterSidebar: React.FC = () => {

    const city = ['miraroad']
    const propertyType = ['1bhk', '2bhk', '3bhk', '4bhk', '5bhk']
    const priceRange = ['50 Lakhs - 1 Cr.', '1 Cr - 2 Cr', '3 Cr - 4 Cr', '4 Cr - 5 Cr']


    return (
        <div className="w-[15vw] px-[1rem] dark:bg-lightBlack dark:text-textWhite ">
            <div className="flex flex-col font-[600] text-[18px] border-b py-4">
                Filter By
            </div>
            <div className="pt-4">
                <div className="font-[600] text-[14px]">Location</div>
                <div className="py-2 border-b">
                    {
                        city.map((item) => {
                            return (
                                <div key={item} className="flex gap-2">
                                    <input type="checkbox" className="cursor-pointer" checked />

                                    <div>{item}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="pt-4">
                <div className="font-[600] text-[14px]">Property Type</div>
                <div className="py-2 border-b">
                    {
                        propertyType.map((item) => {
                            return (
                                <div key={item} className="flex gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <div>{item}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="py-4">
                <div className="font-[600] text-[14px]">Price Range</div>
                <div className="py-2 border-b">
                    {
                        priceRange.map((item) => {
                            return (
                                <div key={item} className="flex gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <div>{item}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )

}

export default FilterSidebar