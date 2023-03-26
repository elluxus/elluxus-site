import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Sliderdiv } from '../src/layout/heroSection';
import Projetos from '../src/components/projects';
import Depoimentos from '../src/components/depoiments';
import { FormContact } from '../src/components/form/FormContact';
import {FeaturedSection} from '../src/components/featuredSection';
import FrameMaps from '../src/components/googlemapsframe';

import WppButton from '../src/components/Buttons/WppButton';
import Footer from '../src/layout/footer';
import Buttons from '../src/components/Buttons/Button';

const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});
const Vsl = dynamic(()=>import("../src/components/vsl.js"),{ssr:false});

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
          title='Transforme sua casa em um lar com os móveis planejados MVA - Qualidade e design '
          subTitle='incomparáveis para ambientes personalizados!'
          />
        <WppButton/>    
        <Projetos/>
        <div className='flex mx-auto  '>
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
        <div className='mx-auto w-1/2 bg-gray-100'>
          <Buttons/>
        </div>
        <Depoimentos/>  
        <FormContact/>
        <FrameMaps/>
      </main>
      <Footer/>
    </div>
  )
}
