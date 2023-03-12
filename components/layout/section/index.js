import React from 'react';
import Image from 'next/image.js';

export const Section = (
  {color,text,title,subTitle,reverb,box,img,alt}
  ) => {
  return (
    <div className={`
      ${box ? 'w-[85%]':'w-[100%]'} 
      px-4 py-6 mx-auto my-0 shadow-sm
    `}>

      <div className={`
        flex ${
          color=='#084526' ? 
          'bg-[#084526] text-white p-6 ' : 
          'text-gray-800 border-t border-b border-[#D7B34C] p-8'
        }   
        ${reverb?'flex-row-reverse':'flex-row'} 
        font-semibold justify-around self-center md:flex-column
        font-sans-serif text-lg gap-8
        `}>
          <div>
            <h1 className='text-4xl p-2'>{title}</h1>
            <h2 className='text-x font-regular p-4 pb-0'>{subTitle}</h2>
            <div className='text-x font-regular p-4 pt-0'>{text}</div>
          </div>
        {color=='#084526' ? '' :
        <div className='
          shadow h-80 
          rounded-sm justify-between bg-white
          bg-center bg-cover relative md:w-80
        '>
          <div>
            <Image
              src={img}
              objectFit={'cover'}
              layout='fill'
              className='!relative rounded'
              alt={alt}
              />
          </div>
        </div>}
      </div>
    </div>
  )
}
