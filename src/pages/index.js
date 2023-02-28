import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })
 import { useEffect } from 'react'

import BarraDeConversao from 'components/Home/BarradeConversão'

import Banner from 'components/Home/Banner'
import Portfolio from 'components/Home/Portfolio'
import Metodos from 'components/Home/Metodos'
import Pricing from 'components/Home/Pricing'
import Contato from 'components/Home/Contato'
import Footer from 'components/Home/Footer'

export default function Home() {
  useEffect(() => {
    function handleHashLinkClick(event) {
      const hash = event.target.hash;
      if (hash) {
        event.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset + 500, behavior: 'smooth' });
        }
      }
    }
    window.addEventListener('click', handleHashLinkClick);
    return () => {
      window.removeEventListener('click', handleHashLinkClick);
    };
  }, []);
  return (
    <>
        <Head>
          <title>Amply - Amplificando Possibilidades - Websites, Sistemas e Métricas.</title>
          {/* <meta name="referrer" content="no-referrer-when-downgrade"/> */}
          <meta name="keywords" content="Amply, amply, AMPLY, agência de websites, sistema para empresas, Amply CMS, Amply Leads, Amply empresa, Amply Sites, contratar sites, contratar sistemas, Métricas, CMS, Tecnologia, Landing Pages."/>
          <meta name="description" content="Websites, Sistemas Web, Landing Pages, Leads e Métricas ! Amply - Amplificando Possibilidades. Uma empresa do grupo Ousía Arqué ." />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="robots" content="index, follow"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="Portuguese"/>
          <meta name="author" content="Grupo Ousía Arqué, Amply, Arqué Lab."></meta>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1588058185003382');
              fbq('track', 'PageView');
              `,
            }}
          />
          <meta
            name="facebook-domain-verification"
            content="77bsdxeiwu2r3w330a7d9clpf294i4"
          />
      </Head>
      <Banner/>
      {/* <BarraDeConversao tagsconvert={<h2>Cansado de ser só mais um? <span>Amplifique-se.</span></h2>} style={{marginTop:'0px'}}/>
      <Portfolio/> */}
      <BarraDeConversao tagsconvert={<h2><strong>Clique aqui</strong> para ter seu <span>WEBSITE</span> personalizado.</h2>} />
      <Metodos/>
      <BarraDeConversao tagsconvert={<h2>Chega de templates! <span>INOVE.</span></h2>} />
      <Pricing/>
      <BarraDeConversao tagsconvert={<h2>Clique aqui e <span>COMECE AGORA.</span></h2>} />
      <Contato/>
      <Footer/>

   
    </>
  )
}
