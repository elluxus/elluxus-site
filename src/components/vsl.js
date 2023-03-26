import ReactPlayer from 'react-player'
import VimeoPlayer from 'react-player/vimeo'
import Buttons from './Buttons/Button'

const VSL = () => {
  return (
    <div className="bg-gray-100 lg:py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="lg:text-center p-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Assista a este vídeo</h2>
          <p className="mt-2 text-justify lg:text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Descubra como nossos móveis planejados podem transformar sua casa
          </p>
          <p className="mt-4 text-justify lg:text-center max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Neste vídeo, nosso especialista em design de interiores irá mostrar como nossos móveis planejados podem ajudar a criar o lar dos seus sonhos.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="scale-75 w-[450px] lg:w-full h-[300px] md:h-[650px]">
            <ReactPlayer
              url="https://vimeo.com/811467374"
              className="md:w-full md:h-full"
              width="100%"
              height="100%"
              config={VimeoPlayer}
              loop={false}
              playing={true}
            />
          </div>


          <div className=" mt-10 lg:mt-0 p-8 pb-0 mb-0">
            <div className="flex text-justify lg:text-center w-full mx-auto text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transforme sua casa com nossos móveis planejados</div>
            <p className="mx-auto text-justify lg:text-center justify-center mt-4 max-w-2xl text-xl text-gray-500">
              Transforme sua casa em um ambiente único e personalizado com nossos móveis planejados - Entre em contato agora e solicite o seu projeto sob medida!
            </p>
            <div className="flex justify-center mt-8 mx-auto w-full">
              {/*<a href="#" className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 inline-flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700">
                Agende uma consulta hoje
              </a>*/}
            </div>
            <Buttons/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default VSL
