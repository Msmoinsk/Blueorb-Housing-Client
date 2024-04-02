import React, { MouseEventHandler } from "react";
import Page from "../app/properties/page"


interface IData {
    city?: string[];
    propertyType?: string[];
    priceRange?: string[];
    devlopers?: string[];
    agents?: string[];
    text1?: string[];
    text2?: string[];
    text3?: string[];
    onClickHandler?: MouseEventHandler<HTMLDivElement>;
}
function FilterSidebar(props: IData) {
    const { city = [], propertyType = [], priceRange = [], devlopers = [], agents = [], text1 = [], text2 = [], text3 = [] } = props;


    return (
        <>
            <div className="w-[15vw] px-[1rem] dark:bg-lightBlack dark:text-textWhite ">
                <div className="flex flex-col font-[600] text-[18px] border-b py-4">
                    Filter By
                </div>
                <div className="pt-4">
                    <div className="font-[600] text-[14px]">{text1}</div>
                    <div className="py-2 border-b">
                        {city.map((item) => (
                            <div key={item} className="flex gap-2">
                                <input type="checkbox" className="cursor-pointer" checked />
                                <div>{item}</div>
                            </div>
                        ))}


                    </div>
                </div>
                <div className="pt-4">
                    <div className="font-[600] text-[14px]">{text2}</div>
                    <div className="py-2 border-b">
                        {propertyType.map((itme2) => (
                            <div key={itme2} className="flex gap-2">
                                <input type="checkbox" className="cursor-pointer" />
                                <div>{itme2}</div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="py-4">
                    <div className="font-[600] text-[14px]">{text3}</div>
                    <div className="py-2 border-b">
                        {priceRange.map((item3) => (
                            <div key={item3} className="flex gap-2 items-center">
                                <input type="checkbox" className="cursor-pointer " />
                                <div>{item3}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )

}

export default FilterSidebar