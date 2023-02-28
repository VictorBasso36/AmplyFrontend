import React, { useState, useEffect, useContext, useMemo } from 'react';
import apiaxios from '../axiosconfig';
import { useRouter } from 'next/router';

import NavigationDashboard from 'components/AmplyApp/components/NavigationDashboard';
import SearchBarDashboard from 'components/AmplyApp/components/SearchBarDashboard';
import NavigationDashboardMobile from 'components/AmplyApp/components/NavigationDashboardMobile';

import Head from 'next/head';

import styles from '@/styles/Pages/Amply/Amply_App.module.css';


import Loading from '../../components/LoadingDashboard';

export default function Amply_App({ children }) {
  
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [permissions, setPermissions] = useState([]);
  
  useEffect(() => {
  const storedPermissions = localStorage.getItem('permissions');
  if(localStorage.getItem('auth_token')){
    if (storedPermissions) {
      apiaxios.get('/api/checkingAuthenticated')
      .then((res) => {
        if (res.status === 200) {
          
          console.log('passou123')
          setPermissions(res.data.permissions);
          localStorage.setItem('permissions', JSON.stringify(res.data.permissions));
          setTimeout(function() {
              setAuthenticated(true);
            }, 2000);
        } else {
          // localStorage.removeItem('auth_token', res.data.token);
          // localStorage.removeItem('auth_name', res.data.token);
          // localStorage.removeItem('permissions', res.data.token);
          // router.push('/Login');
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        // localStorage.removeItem('auth_token');
        // localStorage.removeItem('auth_name');
        // localStorage.removeItem('permissions');
        // router.push('/Login');
      });
  
      setPermissions(storedPermissions);
      setLoading(false);
    } else {
      apiaxios.get('/api/checkingAuthenticated')
        .then((res) => {
          if (res.status === 200) {
        
            setPermissions(res.data.permissions);
            localStorage.setItem('permissions', JSON.stringify(res.data.permissions));
            setTimeout(function() {
              setAuthenticated(true);
            }, 2000);
          } else {
            // localStorage.removeItem('auth_token', res.data.token);
            // localStorage.removeItem('auth_name', res.data.token);
            // localStorage.removeItem('permissions', res.data.token);
            // router.push('/Login');
          }
          
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          // localStorage.removeItem('auth_token');
          // localStorage.removeItem('auth_name');
          // localStorage.removeItem('permissions');
          // router.push('/Login');
        });
    }
  }else{
    router.push('/Login')
  }
 
}, []);

  return (
    <>
      {authenticated ? 
          <>
          <Head>
            <title>Amply App</title>
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
          </Head>
          
          <div className={styles.DashboardContent}>
            <div className={styles.DashboardNavAndContent}>
              <div className={styles.NavHere}>
                  <NavigationDashboard  props={permissions} />
                <div className={styles.NavHereWidth} ></div>
              </div>
              <div className={styles.ContentDashSistem}>
                <div className={styles.BarSearchContent}>
                  <SearchBarDashboard  props={permissions}/>
                </div>  
                <div className={styles.SistemHere}>
                  {loading ? (
                    <div>
                      carregando
                    </div>
                  ) : (
                    children
                  )}
                </div>
                <div className={styles.NavMobileHere}>
                  <NavigationDashboardMobile props={permissions} />
                </div>
              </div>
            </div>
          </div>
          </>
          :
          <Loading></Loading>
      }
    </>
  )
  
}
