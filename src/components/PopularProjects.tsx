
import React from "react";
import PropertyCard from "./PropertyCard";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const PopularProjects: React.FC = () => {
    return (
        <div>
            <div className="flex justify-center mt-[100px] font-[600] text-[30px] dark:text-textWhite ">
                <SectionHeading text='Popular Projects' />
            </div>
            <div className={`tablet:grid tablet:grid-cols-12 tablet:gap-4`}>
                <div className=" tablet:col-span-6 laptop:col-span-3 ">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
                <div className="tablet:col-span-6 laptop:col-span-3">
                    <PropertyCard />
                </div>
            </div>
            <div className="flex justify-center mt-[40px]">
                <Button text='View all projects' style='w-[200px]' />
            </div>
        </div>
    )
}

export default PopularProjects;