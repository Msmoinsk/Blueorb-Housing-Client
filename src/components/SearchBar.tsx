import React from 'react'
import Button from './Button';
import { IoMdSearch } from 'react-icons/io';
import { searchButtonStyles } from '@/constants';


interface SearchProps {
  transactionType: 'buy' | 'rent' | 'all';
}

const SearchBar = (props: SearchProps) => {

  const onClickHandler = () => {
  }

  return (
    <div className=' py-4 flex w-[90%] justify-center border border-primaryGrey rounded-[12px] bg-textWhite dark:bg-lightBlack'>
      <div className='w-[18%] border-r px-2 border-primaryGrey'>
        <div className='dark:text-textGrey font-[400]'>City</div>
        <div>
          <select className='cursor-pointer rounded-sm bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="" id="city">
            <option value="Miraroad">Miraroad</option>
          </select>
        </div>
      </div>

      <div className='w-[22%] border-r px-2 border-primaryGrey'>
        <div className='dark:text-textGrey'>Price</div>
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

      <div className='w-[22%] border-r px-2 border-primaryGrey'>
        <div className='dark:text-textGrey'>Rooms</div>
        <div>
          <select className='cursor-pointer bg-textWhite dark:bg-lightBlack dark:text-textWhite font-[600]' name="rooms" id="rooms">
            <option value="1bhk">1bhk</option>
            <option value="2bhk">2bhk</option>
            <option value="3bhk">3bhk</option>
            <option value="4bhk">4bhk</option>
            <option value="5bhk">5bhk</option>
          </select>
        </div>
      </div>

      {/* <div className='w-[18%] border-r px-2 border-primaryGrey'>
        <div className='dark:text-textGrey'>City</div>
        <div>
          <select className='cursor-pointer dark:bg-lightBlack dark:text-textWhite font-[400]' name="" id="city">
            <option value="Miraroad">Miraroad</option>
          </select>
        </div>
      </div> */}

      <div className='w-[18%] px-2'>
        <Button text='Search' icon={<IoMdSearch size={20} />} style={searchButtonStyles} onClickHandler={onClickHandler} />
      </div>
    </div>
  )
}

export default SearchBar