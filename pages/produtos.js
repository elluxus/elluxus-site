import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import FooterDiv from '../../components/layout/footer/index';
import WppButton from '../../components/Buttons/WppButton';

const Navbar = dynamic(()=>import("../../components/layout/navbar/index"),{ssr:false});

export default function Products(){
  return (
    <>
    <Head>
      <title>Nossos Produtos | Elluxus</title>
      <meta property="og:title" content="Vidraçaria Elluxus" />
      <link rel="icon" href="/favicon-16x16.png" />
    </Head>
    <Navbar/>
    <WppButton/>
    <main className='m-28 flex justify-center text-4xl font-sans text-gray-700'>
      Em Breve !
    </main>  
    <FooterDiv/>
    </>
  )
}
