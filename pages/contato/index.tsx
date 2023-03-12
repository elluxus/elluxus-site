import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {Sliderdiv} from '../../components/layout/slider';
import {FormContact}  from '../../components/form/FormContact';
import FrameMaps from '../../components/googlemapsframe'
import FooterDiv  from '../../components/layout/footer/index';

const Nav_bar = dynamic(()=>import("../../components/layout/navbar/index"),{ssr:false});


export default function Contact(){
  return (
    <div>
      <Head>
        <title>Entre em Contato Conosco | Elluxus</title>
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Nav_bar/>
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