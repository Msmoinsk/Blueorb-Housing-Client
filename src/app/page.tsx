"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import { primaryBlue, primaryGrey, textWhite } from "@/constants";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {


  const theme = useSelector((state: any) => state.theme.darkMode)
  const dispatch = useDispatch()



  const imageUrl = null;

  // useEffect(() => {
  //   if (theme) {
  //     localStorage.setItem('theme', 'dark')
  //     console.log(localStorage.getItem('theme'));
  //   }
  // }, [theme])

  return (
    <div className={theme ? 'dark ' : ''}>
      <Header />
      <div className="dark:bg-bgColorDarkBlack px-[1rem] tablet:px-[5rem]">

        <div className="w-full flex flex-col  justify-center items-center  h-[100vh]  bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="font-[900] text-[40px] dark:text-textWhite">Search your dream home in <span className="text-primaryBlue">Miraroad</span></div>
          <div className="w-full flex justify-center tablet:px-[5rem]  px-[1rem] mt-[3%]">
            <SearchBar transactionType='all' />
          </div>

        </div>



        <div>
          <div>
            <SectionHeading text="Featured projects" />
          </div>
          <div className="flex justify-center items-center py-[2rem] ">
            <Button text="Explore more" style="w-[10%]" />
          </div>
          <FeaturedProjects />
        </div>




        <div className="">
          <SectionHeading text="Latest properties" />

          <div className={`tablet:grid tablet:grid-cols-12 tablet:gap-4 `}>
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

        </div>
      </div>
      <div>
        <Footer />
      </div>



    </div>
  );
}
