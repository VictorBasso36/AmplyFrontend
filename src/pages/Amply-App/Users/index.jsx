import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '@/styles/Pages/Amply/funcionalidades/Profile/Profile.module.css'
import Amply_App from '../../Amply-App'

export default function Users() {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedPermissions = JSON.parse(localStorage.getItem('permissions'));

  
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      if(localStorage.getItem('auth_token')){
        if(storedPermissions && storedPermissions.Users === true){ 
     
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
          <h1>Users</h1>
        </>
      )}
    </div>
  );
}
