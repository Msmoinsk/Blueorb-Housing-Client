import React from 'react'
import Button from './Button';
import { IoMdSearch } from 'react-icons/io';
import { primaryBlue, searchButtonStyles, textWhite } from '@/constants';
import { FaHouseChimneyWindow, FaLocationDot, FaRupeeSign } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { IoPricetagOutline } from 'react-icons/io5';
import { TbCoinRupeeFilled } from 'react-icons/tb';


interface SearchProps {
  transactionType: 'buy' | 'rent' | 'all';
}

const SearchBar = (props: SearchProps) => {
  const theme = useSelector((state: any) => state.theme.darkMode)
  const isMobile = useSelector((state: any) => state.responsive.isMobile)

  const onClickHandler = () => {
  }

  return (
    <>
      {
        isMobile ?
          <div className=' py-4 tablet:flex w-[80%]  tablet:justify-around items-center  border border-primaryGrey rounded-[10px] bg-textWhite dark:bg-lightBlack'>

            <div className='tablet:w-[18%] py-4 tablet:border-r px-2 border-primaryGrey  font-[800] flex items-center gap-2 '>
              <div>{theme ? <FaLocationDot color={primaryBlue} size={30} /> : <FaLocationDot color={primaryBlue} size={30} />}</div>
              <div>  <div className='dark:text-textGrey font-[400] pl-1'>City</div>
                <div>
                  <select className='cursor-pointer  rounded-sm bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="" id="city">
                    <option value="Miraroad">Miraroad</option>
                  </select>
                </div></div>
            </div>

            <div className='w-[20%] desktop:w-[30%] py-4 tablet:border-r px-2 border-primaryGrey flex items-center gap-2'>
              <div> {theme ? <TbCoinRupeeFilled color={primaryBlue} size={30} /> : <TbCoinRupeeFilled color={primaryBlue} size={30} />}</div>
              <div>
                <div className='dark:text-textGrey pl-1 '>Price</div>
                {
                  props.transactionType === 'buy' || props.transactionType === 'all' ?
                    <div>
                      <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="price" id="price">
                        <option value="one">50 Lakhs - 1 Crore</option>
                        <option value="two">1 Crore - 1.5 Crore</option>
                        <option value="three">1.5 Crore - 2 Crores</option>
                        <option value="four">2 Crores - 3 Crores</option>
                        <option value="five">3 Crores - 4 Crores</option>
                        <option value="six">4 Crores - 5 Crores</option>
                      </select>
                    </div>
                    :
                    <div>
                      <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="price" id="price">
                        <option value="one">10,000 - 20,000</option>
                        <option value="two">20,000 - 30,000</option>
                        <option value="three">30,000 - 40,000</option>
                        <option value="four">40,000 - 50,000</option>
                        <option value="five">50,000 - 60,000</option>
                        <option value="six">60,000 - 70,000</option>
                        <option value="seven">70,000 - 80,000</option>
                        <option value="eight">80,000 and above</option>
                      </select>
                    </div>
                }

              </div>
            </div>


            <div className='tablet:w-[20%] py-4 tablet:border-r px-2 border-primaryGrey flex items-center gap-2'>
              <div>{theme ? <FaHouseChimneyWindow color={primaryBlue} size={30} /> : <FaHouseChimneyWindow color={primaryBlue} size={30} />}</div>
              <div>
                <div>
                  <div className='dark:text-textGrey pl-1'>Rooms</div>
                  <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="rooms" id="rooms">
                    <option value="1bhk">1bhk</option>
                    <option value="2bhk">2bhk</option>
                    <option value="3bhk">3bhk</option>
                    <option value="4bhk">4bhk</option>
                    <option value="5bhk">5bhk</option>
                  </select>
                </div>
              </div>

            </div>

            <div className='tablet:w-[20%] px-2'>
              <Button text='Search' icon={<IoMdSearch size={20} />} style={searchButtonStyles} onClickHandler={onClickHandler} />
            </div>
          </div>
          :
          <div className=' py-4 flex tablet:w-full desktop:w-[80%]  desktop:justify-around items-center  border border-primaryGrey rounded-[10px] bg-textWhite dark:bg-lightBlack'>

            <div className='tablet:w-[25%] desktop:w-[18%] py-4 tablet:border-r px-2 border-primaryGrey  font-[800] flex items-center gap-2 '>
              <div>{theme ? <FaLocationDot color={primaryBlue} size={30} /> : <FaLocationDot color={primaryBlue} size={30} />}</div>
              <div>  <div className='dark:text-textGrey font-[400] pl-1'>City</div>
                <div>
                  <select className='cursor-pointer  rounded-sm bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="" id="city">
                    <option value="Miraroad">Miraroad</option>
                  </select>
                </div></div>
            </div>

            <div className='w-[25%] desktop:w-[30%] py-4 tablet:border-r px-2 border-primaryGrey flex items-center gap-2'>
              <div> {theme ? <TbCoinRupeeFilled color={primaryBlue} size={30} /> : <TbCoinRupeeFilled color={primaryBlue} size={30} />}</div>
              <div>
                <div className='dark:text-textGrey pl-1 '>Price</div>
                {
                  props.transactionType === 'buy' || props.transactionType === 'all' ?
                    <div>
                      <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="price" id="price">
                        <option value="one">50 Lakhs - 1 Crore</option>
                        <option value="two">1 Crore - 1.5 Crore</option>
                        <option value="three">1.5 Crore - 2 Crores</option>
                        <option value="four">2 Crores - 3 Crores</option>
                        <option value="five">3 Crores - 4 Crores</option>
                        <option value="six">4 Crores - 5 Crores</option>
                      </select>
                    </div>
                    :
                    <div>
                      <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="price" id="price">
                        <option value="one">10,000 - 20,000</option>
                        <option value="two">20,000 - 30,000</option>
                        <option value="three">30,000 - 40,000</option>
                        <option value="four">40,000 - 50,000</option>
                        <option value="five">50,000 - 60,000</option>
                        <option value="six">60,000 - 70,000</option>
                        <option value="seven">70,000 - 80,000</option>
                        <option value="eight">80,000 and above</option>
                      </select>
                    </div>
                }

              </div>
            </div>


            <div className='tablet:w-[25%] desktop:w-[20%] py-4 tablet:border-r px-2 border-primaryGrey flex items-center gap-2'>
              <div>{theme ? <FaHouseChimneyWindow color={primaryBlue} size={30} /> : <FaHouseChimneyWindow color={primaryBlue} size={30} />}</div>
              <div>
                <div>
                  <div className='dark:text-textGrey pl-1'>Rooms</div>
                  <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="rooms" id="rooms">
                    <option value="1bhk">1bhk</option>
                    <option value="2bhk">2bhk</option>
                    <option value="3bhk">3bhk</option>
                    <option value="4bhk">4bhk</option>
                    <option value="5bhk">5bhk</option>
                  </select>
                </div>
              </div>

            </div>

            <div className='tablet:w-[25%] desktop:w-[20%] px-2'>
              <Button text='Search' icon={<IoMdSearch size={20} />} style={searchButtonStyles} onClickHandler={onClickHandler} />
            </div>
          </div>
      }
    </>
  )
}

export default SearchBar