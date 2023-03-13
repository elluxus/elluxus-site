import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Sliderdiv } from '../src/layout/slider';

import WppButton from '../src/components/Buttons/WppButton';
import Buttons from '../src/components/Buttons/Button';
//import Card from '../components/Cards';

const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});
const Vsl = dynamic(()=>import("../src/components/vsl.js"),{ssr:false});

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Elluxus | Vidraçaria Online para você</title>
        <meta property="Description" content="Vidraçaria Elluxus ,Vidros e aluminio
        MVA e mais, fazemos instalaçoes ou compre seu produto , o melhor em Vidros para Você" />
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <meta property="og:url" content="elluxus.com/" />
        <meta property="og:locale" content="pt_br" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Navbar/>
      <Sliderdiv
        title='Encontre o melhor em Vidros Aqui e Faça seu Orçamento !!'
        subTitle='Instalações de Vidros ,aluminios , MVA e mais.. faça ja seu orçamento conosco !'
      />
      <main>
        <WppButton/>
        <Vsl/>      
      </main>
    </div>
  )
}
