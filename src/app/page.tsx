"use client"

import { toggleMobileMode } from "@/Store/responsiveSlice";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PopularProjects from "@/components/PopularProjects";
import SearchBar from "@/components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {


  const theme = useSelector((state: any) => state.theme.darkMode)
  const isCurrentlyMobile = useSelector((state: any) => state.responsive.isMobile)

  const dispatch = useDispatch()

  const imageUrl = null;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 500;

      // Only dispatch if there's a change in state
      if (isMobile !== isCurrentlyMobile) {
        dispatch(toggleMobileMode());
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, isCurrentlyMobile]);

  return (
    <div className={theme ? 'dark ' : ''}>
      <Header />
      <div className="dark:bg-bgColorDarkBlack px-[1rem] tablet:px-[5rem]">

        <div className="w-full flex flex-col justify-center items-center h-[100vh]  bg-no-repeat bg-center">
          <div className="font-[900] tablet:text-[40px] text-[24px] dark:text-textWhite text-center">Search your dream home in <span className="text-primaryBlue">Miraroad</span></div>
          <div className="w-full flex justify-center tablet:px-[5rem]  px-[1rem] mt-[3%]">
            <SearchBar transactionType='all' />
          </div>

        </div>

        <div className="mb-[40px]">
          <FeaturedProjects />
        </div>

        <div className="pb-[40px]">
          <PopularProjects />
        </div>
      </div>
      <div>
        <Footer />
      </div>



    </div>
  );
}