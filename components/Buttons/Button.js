import React from 'react';
import Link from 'next/link';

const Buttons = () => {
  return (
    <Link href='/contato' className='flex justify-center'>
      <button className='bg-[#D7B34C] font-bold rounded text-gray-700
        shadow-lg uppercase tracking-wider px-8 py-4 m-12 mt-0
        hover:bg-[#084923] hover:text-white 
        transtion-all ease-in duration-[0.2s] transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110' >
        Quero Fazer Meu Orçamento !
      </button>
    </Link>
   
  )
}
export default Buttons;