"use client"

import { toggleMobileMode } from "@/Store/responsiveSlice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {


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

        <div className="w-full flex flex-col justify-center items-center h-[100vh]  bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="font-[900] tablet:text-[40px] text-[24px] dark:text-textWhite text-center">Search your dream home in <span className="text-primaryBlue">Miraroad</span></div>
          <div className="w-full flex justify-center tablet:px-[5rem]  px-[1rem] mt-[3%]">
            <SearchBar transactionType='all' />
          </div>

        </div>

        <div>
          <div className="flex justify-center font-[600] text-[30px] dark:text-textWhite mb-5">
            <div>
              Featured Projects
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-2">
            <div className="">
              <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
            </div>
            <div>
              <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
            </div>
            <div>
              <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mt-[100px] font-[600] text-[30px] dark:text-textWhite ">Popular Properties</div>
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

        </div>
      </div>
      <div>
        <Footer />
      </div>



    </div>
  );
}