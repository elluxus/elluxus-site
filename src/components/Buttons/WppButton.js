import React from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai';

function WppButton() {
  return (
    <>
      <a className='fixed w-12 h-12 bottom-6 right-6 rounded-full bg-[#25D366]
        z-[100] flex cursor pointer hover:bg-[#075E54]' 
        href='https://wa.me/5531999570478' target='_blank' rel='noreferrer'>
        <div className='relative left-2 top-2'>
          <AiOutlineWhatsApp className='text-white w-8 h-8'/>
        </div>
      </a>
    </>
  )
}

/*const Container = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  border-radius: 2rem;
  background:#25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 3px gray;
  &:hover{
    background: #075E54;
  }` 

const Content = styled.div`
  position: relative;
  bottom: 40px;
  right: 10px;
  border-radius: 2rem;
  width: 30px;
  height: 25px;
  background: red;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
`*/

export default WppButton