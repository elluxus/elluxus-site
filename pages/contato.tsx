import React ,{useEffect, useState}from 'react';
import Confetti from 'react-confetti'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {Sliderdiv} from '../src/layout/heroSection';
import FooterDiv  from '../src/layout/footer';

const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});


export default function Contact(){

  const[showConfetti,setShowConfetti] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowConfetti(true)
    },3000)
  },[])

  return (
    <div>
      <Head>
        <title>Elluxus | Obrigado por entrar em contato</title>
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Navbar/>
      <main>
        {showConfetti && <Confetti/>}
      <Sliderdiv
        title={'Obrigado por entrar em Contato Conosco, para finalizar nos chame no WhatsApp !'}
        wtsappButton subTitle={undefined}/>
      </main>
      <FooterDiv/>
    </div>
  )
}