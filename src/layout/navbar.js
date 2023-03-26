import { useState , useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [ navbar,setNavbar ] = useState(false)
  
  const changeBackground = ()=>{
    if(window.scrollY >= 550) {
      setNavbar(true)
    }else(
      setNavbar(false)
    )
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeBackground)
  },[])


  return (
    <div>
    <nav className={`flex relative justify-center bg-[#133333] shadow-md rounded-b
    z-50 transition-all ease-in duration-[0.4s]
     h-[90px] w-full mx-auto ${navbar? 'bg-white shadow-md fixed ':
     ''}`}>

    <div className='flex items-center mt-8 h-auto w-auto scale-50'>
      <Link href="/">
        <a className="">
          <Image
            src='/imgs/logo_phase.png'
            objectFit='cover'
            width={400}
            height={300}
            
          />
        </a>
      </Link>
      </div>

      {/*<div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex my-auto items-baseline space-x-4">
              <Link href="/">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Início</a>
              </Link>
              <Link href="/produtos">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Produtos</a>
              </Link>
              <Link href="/contato">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contato</a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-900 md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="hover:bg-gray-700 text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Início
                </a>
            </Link>
            <Link href="/produtos">
              <a className="hover:bg-gray-700 text-gray-800 block px-3 py-2 rounded
              -md text-base font-medium">
                Produtos
                </a>
            </Link>
            <Link href="/contato">
            <a className="hover:bg-gray-700 text-gray-8004 block px-3 py-2 rounded-md text-base font-medium">
              Contato
              </a>
        </Link>
        </div>
    </div>
      )}*/}
      </nav>
      </div>
  )
}
              
export default Navbar
              
              
