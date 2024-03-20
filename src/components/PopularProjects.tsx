
import React from "react";
import PropertyCard from "./PropertyCard";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import { useSelector } from "react-redux";

const PopularProjects: React.FC = () => {

    const isMobile = useSelector((state: any) => state.responsive.isMobile)

    const arr = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div>
            <div className="flex justify-center mt-[100px] font-[600] text-[30px] dark:text-textWhite ">
                <SectionHeading text='Popular Properties' />
            </div>
            {
                !isMobile ?
                    <div className={`tablet:grid tablet:grid-cols-12 tablet:gap-4`}>
                        {
                            arr.map((item) => {
                                return (
                                    <div key={item} className=" tablet:col-span-6 laptop:col-span-3 ">
                                        <PropertyCard />
                                    </div>
                                )
                            })
                        }
                    </div>

                    :
                    <div className="flex overflow-scroll gap-4">
                        {
                            arr.map((item) => {
                                return (
                                    <div key={item} className=" ">
                                        <PropertyCard />
                                    </div>
                                )
                            })
                        }
                    </div>
            }
            <div className="flex justify-center mt-[40px]">
                <Button text='View all properties' style='w-[200px]' />
            </div>
        </div>
    )
}

export default PopularProjects;
