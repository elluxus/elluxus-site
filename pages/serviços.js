import React from 'react';
import Head from 'next/head';
import * as C from '../../styles/pages_Styles/Services_style'
import dynamic from 'next/dynamic';
import FooterDiv from '../src/layout/footer/index.js'
import WppButton from '../../components/Buttons/WppButton';


const Navbar = dynamic(()=>import("../../layout/Navbar.js"),{ssr:false});

function Services() {
  return (
    <div>
    <Head>
      <title> Nossos Serviços | Elluxus Vidraçaria</title>
      <meta property="og:title" content="Vidraçaria Elluxus" />
      <link rel="icon" href="/favicon-16x16.png" />
    </Head>
    <Navbar/>
    <WppButton/>
    <C.Main white>
      Em breve !
    </C.Main>
    <FooterDiv/>
    </div>
  )
}

export default Services