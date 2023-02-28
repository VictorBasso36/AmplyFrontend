import React, {  useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import styles from '@/styles/Pages/Amply/funcionalidades/Home/Home.module.css';


import apiaxios from '../../../../components/axiosconfig';

export default function Home() {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPermissions = JSON.parse(localStorage.getItem('permissions'));

    if (localStorage.getItem('auth_token')) {
      if (storedPermissions?.Home === true) {
        setAuthenticated(true);

        setTimeout(() => {
          setLoading(false);
        }, 500);  //simulaloading

      } else {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        localStorage.removeItem('permissions');
        router.push('/Login');
      }

    } else {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      localStorage.removeItem('permissions');
      router.push('/Login');
    }

  }, []);
  
  return (
    <>
      {authenticated && !loading ? (
        <div className={styles.fullItem}>
          <h1>Home Page</h1>
        </div>
      ) : (
        <div className={styles.fullItem}>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      )}
    </>
  );
  
}
