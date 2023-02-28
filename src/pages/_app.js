import React from 'react';
import Layout from '../../components/layout/'
import '@/styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  // Verifica se a rota atual é /Amply-App
  const isAmplyAppRoute = router.pathname.startsWith('/Amply-App');

  // Renderiza o componente Layout em volta do componente Component
  // se a rota atual for /Amply-App. Caso contrário, apenas renderiza o
  // componente Component.
  return isAmplyAppRoute ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
