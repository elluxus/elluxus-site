import React ,{useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineWhatsApp} from 'react-icons/ai';

export const Sliderdiv = ({title,subTitle,wtsappButton}) => {
    

  return (
    <div className={`py-32
      ${wtsappButton? 'bg-gradient-to-l from-[#084923] to-[#D7B34C]'
      :' bg-gradient-to-r from-[#133333] to-[#d7b24c] '}`}>
      <div className={`container mx-auto px-6
        ${wtsappButton? 'grid justify-center':''}
      `}>
        <h2 className='text-4xl font-bold mb-2 font-sans-serif text-white'>
          {title}
        </h2>
        <h3 className='text-2xl mb-8 text-gray-200'>
          {subTitle}
        </h3>  
        
        {!wtsappButton ? 
          <div className='flex'>
            {/*<a className='bg-white font-bold rounded text-gray-700
             py-2 px-6 md:px-8 shadow-lg uppercase tracking-wider mx-2 h-10
             hover:bg-[#D7B34C] hover:text-[#084923] 
             transtion-all ease-in duration-[0.2s]'
            >
              Produtos
            </a>*/}
            <Link href={'#section-target'}>
              <button className='bg-white font-bold rounded text-gray-700
                py-4 px-8 shadow-lg uppercase tracking-wider
                hover:bg-[#D7B34C] hover:text-white
                transtion-all ease-in duration-[0.2s] cursor-pointer'
              >
                Entre em Contato
              </button> 
            </Link>
          </div> : 
            <div className='flex justify-center'>
              <a href='https://wa.me/5531999570478?text="Ola Gostaria de Fazer um orçamento do meu movel planejado MVA"' 
              target='_blank'
                className='flex justify-center bg-white font-bold rounded text-gray-700
                shadow-lg uppercase tracking-wider px-8 py-4
                hover:bg-[#075E54] hover:text-white 
                transtion-all ease-in duration-[0.2s]'>
                <AiOutlineWhatsApp className='flex w-6 h-6 my-auto mr-2'/> 
                Whats App
              </a>             
            </div>
        }
        </div>
    </div>
  )
}
