import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {Sliderdiv} from '../src/layout/slider';
import {FormContact}  from '../src/components/form/FormContact';
import FrameMaps from '../src/components/googlemapsframe'
import FooterDiv  from '../src/layout/footer';

const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});


export default function Contact(){
  return (
    <div>
      <Head>
        <title>Entre em Contato Conosco | Elluxus</title>
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Navbar/>
      <Sliderdiv
        title={'Entre em Contato Conosco Pelo WhatsApp!'}
        wtsappButton subTitle={undefined}/>
      <main>
        <h2 className='flex justify-center text-4xl font-sans text-gray-600 m-16 mb-0'>Mande uma mensagem e faça um orçamento!</h2>
        <p className='flex justify-center text-xl font-sans text-gray-600 mb-16'>lhe responderemos por whatsapp !</p>
        <FormContact />
        
        <FrameMaps/>
      </main>
      <FooterDiv/>
    </div>
  )
}