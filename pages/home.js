import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Sliderdiv } from '../src/layout/slider';
import Projetos from '../src/components/projects';
import Depoimentos from '../src/components/depoiments';

import WppButton from '../src/components/Buttons/WppButton';
import Footer from '../src/layout/footer';

const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});
const Vsl = dynamic(()=>import("../src/components/vsl.js"),{ssr:false});

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Elluxus | Moveis Pensados em você</title>
        <meta property="Description" content="Elluxus Moveis Planejados ,Vidros e aluminio
        MVA e mais, fazemos instalaçoes ou compre seu produto , o melhor em MVA para Você" />
        <meta property="og:title" content="Moveis PLanejados Elluxus" />
        <meta property="og:url" content="elluxus.com/" />
        <meta property="og:locale" content="pt_br" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Navbar/>
      <Vsl/>
      <main>

        <Sliderdiv
          title='Transforme sua casa em um lar com os móveis planejados MVA - Qualidade e design '
          subTitle='incomparáveis para ambientes personalizados!'
        />
        <WppButton/>    
        <Projetos/>
        <Depoimentos/>  
      </main>
      <Footer/>
    </div>
  )
}
