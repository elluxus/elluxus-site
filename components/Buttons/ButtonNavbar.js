import React from 'react';
import {BiMenu} from 'react-icons/bi';
import {BiX} from 'react-icons/bi';

export default function ButtonNavbar({handleToggle,openNav}) {
  return (
    <>
      <div className='absolute md:none top-4 right-4'>
        <div
        onClick={handleToggle}
        >{ openNav ? 
          <BiX className='block md:text-white w-12 h-12 right-0
          text-[#D7B34C]'/> :
          <BiMenu className='block md:text-white w-12 h-12
          text-[#D7B34C]
          '/> 
        } 
        </div>
      </div>
    </>
  )
}
