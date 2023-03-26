import Head from 'next/head';
import dynamic from 'next/dynamic';
const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});
const Vsl = dynamic(()=>import("../src/components/vsl.js"),{ssr:false});

import { Sliderdiv } from '../src/layout/heroSection';
import Projetos from '../src/components/projects';
import Depoimentos from '../src/components/depoiments';
import { FormContact } from '../src/components/form/FormContact';
import {FeaturedSection} from '../src/components/featuredSection';
import FrameMaps from '../src/components/googlemapsframe';

import WppButton from '../src/components/Buttons/WppButton';
import Footer from '../src/layout/footer';
import Buttons from '../src/components/Buttons/Button';


export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>  Elluxus | Moveis Pensados em você</title>
        <meta property="Description" content="  Elluxus Moveis Planejados ,Vidros e aluminio
        MVA e mais, fazemos instalaçoes ou compre seu produto , o melhor em MVA para Você" />
        <meta property="og:title" content="Moveis PLanejados Elluxus" />
        <meta property="og:url" content="www.elluxus.com/" />
        <meta property="og:locale" content="pt_br" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Navbar/>
      <main>
        <Vsl/>
        <Sliderdiv
          title='Que tal substituir seus móveis velhos e mofados por opções sofisticadas e acessíveis? Com os móveis em MVA, você pode renovar seu ambiente com estilo e economia!'
          subTitle='Não perca mais tempo procurando - somos os únicos no mercado a oferecer móveis planejados em MVA, a opção mais sofisticada e durável para sua casa!'
          />
        <WppButton/>    
        <Projetos/>
        <div className='flex flex-col md:flex-row mx-auto  '>
        <FeaturedSection 
          title={'Moveis em MVA'}
          image={'/imgs/projeto-1.jpg'}
          emoji={'🤩'}
          color={'border-green-400'}
          description={'Moveis em MVA são construidos com vidro e aluminio proporcionando a limpeza e durabilidade, e claro deixando o ambiente com cara de LUXO'}/>

          <FeaturedSection 
          title={'Moveis em MDF'}
          image={'/imgs/mdfum.jpg'}
          emoji={'🤮'}
          color={'border-red-400'}
          description={'Moveis em MDF são construidos apartir da madeira mdf, eles sujam facil, incham, e não são amigaveis ao meio ambiente..'}/>

        </div>
        <div className='my-4 mx-auto w-full bg-gray-100'>
          <h2 className=' py-4 text-justify lg:text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Tenha moveis com alta durabilidade
          </h2>
          <h2 className='lg:w-1/2 mb-5 mx-auto text-xl text-center my-4'>
            Renove sua casa agora e experimente a nova tendência em móveis com o MVA -  
            <span className='text-bold text-green-600 mx-2'>
              A opção luxuosa que cabe no seu bolso
              </span>
              , só aqui na Élluxus!
            <span className='text-orange-600 mx-2'>
            Substitua já seus móveis em MDF
            </span> 
            e aproveite o que há de mais sofisticado em design e durabilidade.
          </h2>
          <div className='mx-auto md:w-1/2 my-5'>
            <Buttons title={'Faça já um orçamento'}/>

          </div>
        </div>
        <Depoimentos/>  
        <FormContact/>
        <FrameMaps/>
      </main>
      <Footer/>
    </div>
  )
}
