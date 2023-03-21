
const Footer = ()=>{
  return(
  <footer className="bg-gray-900">
  <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      <div className="px-5 py-2">
        <a href="#" className="text-base leading-6 text-gray-400 hover:text-gray-300">
          Contato
        </a>
      </div>
      <div className="px-5 py-2">
        <a href="#" className="text-base leading-6 text-gray-400 hover:text-gray-300">
          Sobre nós
        </a>
      </div>
      <div className="px-5 py-2">
        <a href="#" className="text-base leading-6 text-gray-400 hover:text-gray-300">
          Trabalhe conosco
        </a>
      </div>
    </nav>
    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-300">
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-300"></a>
          <span className="sr-only">Twitter</span> 
              <p className="mt-4 text-base leading-6 text-gray-400">
                © 2023 MVA Móveis Planejados. Todos os direitos reservados.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center">
                  <span className="ml-1 text-gray-400">
                    CNPJ 00.000.000/0000-00
                  </span>
                </div>
                <div className="ml-6 flex items-center">
                  <span className="ml-1 text-gray-400">
                    Rua tal, 123 - Bairro tal - CEP 00000-000 - São Paulo/SP
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer;