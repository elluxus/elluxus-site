import React,{useState, useEffect} from 'react';
import Image from 'next/image.js';
import Link from 'next/link.js'
import LogoSvg from '../../../public/imgs/logoElluxos.svg';
import ButtonNavbar from '../../Buttons/ButtonNavbar';

const Nav_bar = React.forwardRef(() => {
  const [openNav,setOpenNav] = useState(false)
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = ()=>{
    if(window.scrollY >= 420) {
      setNavbar(true)
    }else(
      setNavbar(false)
    )
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeBackground)
  },[])

  const handleToggle = ()=>{
    setOpenNav(prev => !prev)
  }

  return (
    <>
      <div className={`
        flex w-[100%] z-50 transition-all ease-in duration-[0.4s]
        ${navbar? 'fixed bg-white border-b border-[#D7B34C]'
          :'h-20 border-t-2 border-[#D7B34C]'}
      `}>
        <div className={`
          flex itens-center w-[100%] md:w-[70%] 
          mx-auto my-0 justify-between
          ${navbar? 'content-center':'p-0'}
        `}>
          <div className='mr-24'>
          <Link href='/' passRef>
            <Image 
              src={LogoSvg}
              width={200}
              height={80}
              className='cursor-pointer'
              />   
          </Link> 
          </div>

          <ButtonNavbar 
            handleToggle={handleToggle} 
            openNav={openNav}
          />
          <nav className={`${openNav && true ? 'block':'hidden'} md:block`}>
            <ul className={`
              none absolute h-[calc(100vh - 70px)] top-[68px] right-0
              p-0 w-[100%] z-[1000] bg-white md:bg-transparent md:relative md:top-0
              md:flex decoration-none gap-8 
            `}
              menu={openNav? true : undefined}
              active={navbar? true : undefined}
            >
              <li className={`
                flex justify-center w-[100%]
                p-4 md:p-0 border-b md:border-none border-[#D7B34C] m-0 md:m-4 
                `}>
                <Link href='/' activeclassName='active' passRef>
                  <a className={`
                  font-sans-serif px-6 py-2 shadow-inset text-base font-semibold
                  rounded border-b-2 border-[#D7B34C] text-[#D7B34C] hover:shadow-md
                  hover:bg-[#D7B34C] hover:text-white transition ease-in duration0[0.4s]
                  w-[100%] text-center   
                  `}active={navbar? true : undefined}>Inicio</a> 
                </Link>
              </li>
              {/*<C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/produtos'} passRef>
                  <C.textItem  active={navbar? true : undefined}>Produtos</C.textItem> 
           
                </C.Item>
                </C.NavItem>
              <C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/servicos'} passRef>
                  <C.textItem  active={navbar? true : undefined}>Serviços</C.textItem> 
              
                </C.Item>
              </C.NavItem>*/}
              <li className={`
                flex justify-center w-[100%]
                p-4 md:p-0 border-b md:border-none border-[#D7B34C] m-0 md:m-4 
              `}
              active={navbar? true : undefined}>
                <Link href={'/contato'} to='/contato' passRef>
                  <a className={`p-6 font-sans-serif  font-sans-serif 
                  px-6 py-2 shadow-inset text-base font-semibold
                  rounded border-b-2 border-[#D7B34C] text-[#D7B34C] hover:shadow-md
                  hover:bg-[#D7B34C] hover:text-white transition ease-in duration0[0.4s]
                  w-[100%] text-center  
                  `} active={navbar? true : undefined}>Contatos</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div> 
      </div>
    </>
  )
})
export default Nav_bar;