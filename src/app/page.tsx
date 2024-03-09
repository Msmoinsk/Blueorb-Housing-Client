"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  const theme = useSelector((state: any) => state.theme.darkMode)
  const dispatch = useDispatch()

  const imageUrl = '../hero-2.png'

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
        <div className="w-full flex flex-col items-center pt-[5%] h-[80vh]  bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="font-[900] text-[40px] dark:text-textWhite">Search your dream home in <span className="text-primaryBlue">Miraroad</span></div>
          <div className="w-full flex justify-center px-[5rem] mt-[3%]">
            <SearchBar transactionType='all' />
          </div>

        </div>

        <div>
          <div className="flex justify-center font-[600] text-[30px] dark:text-textWhite mb-5">
            <div>
              Featured Projects
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            <div className="">
              <Projects projectImageOne="./projects/micl.png" developerLogo="./projects/micl-logo.png" projectName='Woodland Residencies' developerName='MICL' projectAddress="Miraroad" projectCity="Thane" flatTypes='2, 3Bhk' price="1.6 Cr" />
            </div>
            <div>
              <Projects projectImageOne="./projects/durga.png" developerLogo="./projects/durga-logo.png" projectName='Durga Enclave' developerName='Anmol Developers' projectAddress="Miraroad" projectCity="Thane" flatTypes='1, 2 Bhk' price="60 Lakh" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mt-[100px] font-[600] text-[30px] dark:text-textWhite ">Popular Properties</div>
          <div className={`tablet:grid tablet:grid-cols-12 tablet:gap-4`}>
            <div className=" tablet:col-span-6 laptop:col-span-3 flex">
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
