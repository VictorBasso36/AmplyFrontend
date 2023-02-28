import Head from 'next/head'

import React, { useContext, useEffect, useState } from 'react';

import styles from '@/styles/Pages/Amply/funcionalidades/Leads/Leads.module.css'
import Amply_App from '../../Amply-App'
import { useRouter } from 'next/router';

import apiaxios from '../../../../components/axiosconfig';
export default function Leads() {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedPermissions = JSON.parse(localStorage.getItem('permissions'));

  
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      if(localStorage.getItem('auth_token')){
        if(storedPermissions && storedPermissions.Leads === true){ 
     
        } else {
          router.push('/Amply-App/Home');
        }
      } else {
        router.push('/Amply-App/Home');
      }
    }, 500); // tempo simulado de carregamento em 0.5 segundos
  
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  
  return (
    <div className={styles.fullItem}>
      {loading ? (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      ) : (
        <>
          <h1>Leads</h1>
        </>
      )}
    </div>
  );

  return (
    <>

      <div className={styles.fullItem}>
        <h1>Leads</h1>
      </div>
   </>
  )
}
