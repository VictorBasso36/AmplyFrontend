import { useState, useEffect, useMemo } from 'react'


import { useRouter } from "next/router";
import Link from 'next/link';
let displayMobileMenuNavigate
let activeMenucss

import styles from '@/styles/Pages/Amply/components/SearchBarDashboard.module.css'
import stylesNavigationDashboard from '@/styles/Pages/Amply/components/NavigationDashboard.module.css'
import InputSearchBar from 'components/InputsAndButtons/InputSearchBar';
import NavigationDashboard from './NavigationDashboard';

import CloseBTN from '../../InputsAndButtons/closeBTN'
import apiaxios from '../../axiosconfig'


export default function SearchBarDashboard(props) {
    const location = useRouter();
    const [logout, MyLogout] = useState(false)
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('auth_name'));
  }, []);

  const router = useRouter();

  const permissionsMemo = useMemo(() => {
    return props;
  }, [props]);

  const letsLogout = (e) => {
    e.preventDefault();

    if (localStorage.getItem('auth_token')) {
      apiaxios.post('/api/logout').then(res => {
        if (res.data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_name');
          localStorage.removeItem('permissions');
         
          router.push('/Login');
        }
      })
    } else {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_name');
      localStorage.removeItem('permissions');
     
       
      router.push('/Login');
    }
  };

    useEffect(() => {
  
    }, [location]);   


    const [showMenuModalMobile, setShowMenuModalMobile] = useState(false);
    useEffect(() => {
    if(showMenuModalMobile){
     
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }else{
     

      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }   
    })

    return (
        <div className={styles.SearchBarDashboard}>
            {/* onClick={() => setShowMenuModalMobile(!showMenuModalMobile)} */}
            {showMenuModalMobile &&
            <div className={styles.ModalNavitionMobileAll}  >
                    <div onClick={() => setShowMenuModalMobile(!showMenuModalMobile)} className={styles.btnclose}>
                      <CloseBTN />  
                    </div>
                <div className={stylesNavigationDashboard.scrollNavigationHere}>        
                    <div className={stylesNavigationDashboard.blockOptions}>
                        <h3>OPTIONS</h3>
                        {permissionsMemo.props.Home &&
                            <Link href="/Amply-App/Home"  onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            {router.pathname === "/Amply-App/Home" ? 
                            <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={stylesNavigationDashboard.homeSVG} style={{stroke:'white', fill:'white'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={stylesNavigationDashboard.homeSVG} style={{stroke:'white', fill:'white'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                                <p>Home</p>
                            </div> 
                            :   
                            <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={stylesNavigationDashboard.homeSVG} style={{stroke:'black', fill:'transparent'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={stylesNavigationDashboard.homeSVG} style={{stroke:'black', fill:'transparent'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                                <p>Home</p>
                            </div>}
                            </Link>
                        }   
                        {permissionsMemo.props.Dashboard &&
                            <Link href="/Amply-App/Dashboard"> 
                            {router.pathname === "/Amply-App/Dashboard" ? 
                        
                            <div className={` ${stylesNavigationDashboard.ItemDashboard}   ${stylesNavigationDashboard.ItemDashboardRoute}`}  onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'white'}} d="M3,12a9,9,0,0,1,18,0"/><line className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'white'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'white', fill:'white'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                                <p>Dashboard</p>
                            </div> 
                            :   
                            <div className={stylesNavigationDashboard.ItemDashboard}  onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'black'}} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'black'}} d="M3,12a9,9,0,0,1,18,0"/><line className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'black'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={stylesNavigationDashboard.dashboardSVG} style={{stroke:'black'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                                <p>Dashboard</p>
                            </div>}
                            </Link>
                        }
                        {permissionsMemo.props.Website &&
                            <Link href="/Amply-App/Website">
                            {router.pathname === "/Amply-App/Website" ? 
                        
                        <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={stylesNavigationDashboard.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.websiteSVG} style={{stroke:'white'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={stylesNavigationDashboard.websiteSVG} style={{stroke:'white'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={stylesNavigationDashboard.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={stylesNavigationDashboard.websiteSVG} style={{stroke:'white'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                                <p>Website</p>
                            </div> 
                            :   
                            <div className={stylesNavigationDashboard.ItemDashboard}  onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={stylesNavigationDashboard.websiteSVG} style={{stroke:'black'}}  cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.websiteSVG} style={{stroke:'black'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={stylesNavigationDashboard.websiteSVG} style={{stroke:'black'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={stylesNavigationDashboard.websiteSVG} style={{stroke:'black'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={stylesNavigationDashboard.websiteSVG} style={{stroke:'black'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                                <p>Website</p>
                            </div>}
                            </Link>
                        }
                        {permissionsMemo.props.Leads &&
                            <Link href="/Amply-App/Leads">
                            {router.pathname === "/Amply-App/Leads" ? 
                            
                            <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={stylesNavigationDashboard.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="8"/><circle className={stylesNavigationDashboard.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="4"/><polyline className={stylesNavigationDashboard.leadsSVG2} style={{stroke:'white', fill:'white'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={stylesNavigationDashboard.leadsSVG2} style={{stroke:'white', fill:'white'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
                                <p>Leads</p>
                            </div> 
                            :   
                            <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={stylesNavigationDashboard.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="8"/><circle className={stylesNavigationDashboard.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="4"/><polyline className={stylesNavigationDashboard.leadsSVG2} style={{stroke:'black'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={stylesNavigationDashboard.leadsSVG2} style={{stroke:'black'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
                                <p>Leads</p>
                            </div>}
                            </Link>
                        }
                        {permissionsMemo.props.Profile &&
                        <Link href="/Amply-App/Profile">
                        {router.pathname === "/Amply-App/Profile" ? 
                        <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'white', fill:'white'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle className={stylesNavigationDashboard.profileSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'white'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                            <p>Perfil</p>
                        </div> 
                        :   
                        <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'black'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle style={{stroke:'black'}} className={stylesNavigationDashboard.profileSVG} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'black'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                            <p>Perfil</p>
                        </div>}
                        </Link>
                        }
                        {permissionsMemo.Blog &&
                        <Link href="/Amply-App/Blog">
                        {router.pathname === "/Amply-App/Blog" ? 
                        <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'white', fill:'white'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle className={stylesNavigationDashboard.profileSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'white'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                            <p>Blog</p>
                        </div> 
                        :   
                        <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'black'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle style={{stroke:'black'}} className={stylesNavigationDashboard.profileSVG} cx="12" cy="12" r="11.5"/><path className={stylesNavigationDashboard.profileSVG} style={{stroke:'black'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                            <p>Blog</p>
                        </div>}
                        </Link>
                        }
                    </div>
                    <div className={stylesNavigationDashboard.blockOptions}>
                        <h3>OUTROS</h3>
                        {permissionsMemo.Users &&
                            <Link href="/Amply-App/Users">
                            {router.pathname === "/Amply-App/Users" ? 
                            <div className={`${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.84 20"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'white', fill:'white'}} d="M18.41,5.39a3,3,0,1,1-6,0V3.61a3,3,0,1,1,6,0Z"/><circle className={stylesNavigationDashboard.usersSVG} style={{stroke:'white', fill:'white'}} cx="7.41" cy="3.5" r="2.5"/><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'white', fill:'white'}} d="M9.93,11.64A6,6,0,0,0,.52,15.35a1,1,0,0,0,1,1.15h4.9"/><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'white', fill:'white'}} d="M15.41,11.5h0a8,8,0,0,0-7.92,6.86,1,1,0,0,0,1,1.14H22.33a1,1,0,0,0,1-1.14A8,8,0,0,0,15.41,11.5Z"/></g></g></svg>
                            <p>Usuários</p>
                            </div> 
                            :   
                            <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.84 20"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'black'}} d="M18.41,5.39a3,3,0,1,1-6,0V3.61a3,3,0,1,1,6,0Z"/><circle className={stylesNavigationDashboard.usersSVG} style={{stroke:'black'}} cx="7.41" cy="3.5" r="2.5"/><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'black'}} d="M9.93,11.64A6,6,0,0,0,.52,15.35a1,1,0,0,0,1,1.15h4.9"/><path className={stylesNavigationDashboard.usersSVG} style={{stroke:'black'}} d="M15.41,11.5h0a8,8,0,0,0-7.92,6.86,1,1,0,0,0,1,1.14H22.33a1,1,0,0,0,1-1.14A8,8,0,0,0,15.41,11.5Z"/></g></g></svg>
                                <p>Usuários</p>
                            </div>}
                            </Link>
                        }
                        <Link href="/Amply-App/Config">
                        {router.pathname === "/Amply-App/Config" ? 
                        <div className={`${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2"  data-name="Layer 2"><g id="transport" ><path className={stylesNavigationDashboard.configSVG} style={{stroke:'white'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={stylesNavigationDashboard.configSVG} style={{stroke:'white' }} cx="12" cy="12" r="4.5"/></g></g></svg>
                            <p>Configurações</p>
                        </div> 
                        :   
                        <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.configSVG} style={{stroke:'black'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={stylesNavigationDashboard.configSVG} style={{stroke:'black'}}  cx="12" cy="12" r="4.5"/></g></g></svg>
                            <p>Configurações</p>
                        </div>}
                        </Link>
                
                        {logout ?
                        
                        <div className={` ${stylesNavigationDashboard.ItemDashboard}  ${stylesNavigationDashboard.ItemDashboardRoute}`} onClick={letsLogout} style={{cursor:  'pointer'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23.78"><defs></defs><g id="Layer_2"  data-name="Layer 2"><g id="transport"><path className={styles.logoutSVG} style={{stroke:'white'}} d="M.5,8.28l8.26,7.06a1,1,0,0,0,1.74-.67V1.5A1,1,0,0,0,8.84.75Z"/><path className={stylesNavigationDashboard.logoutSVG} style={{stroke:'white'}}  d="M10,9.91h2.08c3.74,0,6.77,3.51,6.77,7.2a7,7,0,0,1-3.64,6.17h0A9.52,9.52,0,0,0,22.5,14a9.31,9.31,0,0,0-9.37-9.25H10"/></g></g></svg> <p>Sair Agora</p>
                        </div> 
                        :   
                        //onClick={letsLogout}
                        <div className={stylesNavigationDashboard.ItemDashboard} onClick={() => MyLogout(true)} style={{cursor:  'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23.78"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={stylesNavigationDashboard.logoutSVG} d="M.5,8.28l8.26,7.06a1,1,0,0,0,1.74-.67V1.5A1,1,0,0,0,8.84.75Z"/><path className={stylesNavigationDashboard.logoutSVG} d="M10,9.91h2.08c3.74,0,6.77,3.51,6.77,7.2a7,7,0,0,1-3.64,6.17h0A9.52,9.52,0,0,0,22.5,14a9.31,9.31,0,0,0-9.37-9.25H10"/></g></g></svg> <p>Logout</p>
                        </div>}
                
            

                    </div>
                </div>
            
            </div>
            }



            <div className={styles.responsiveBarSearch}>
                <Link href="/Amply-App/Profile">
                <div className={styles.photoUserResponsiveNavBar}>
                    <img src="https://img.freepik.com/vetores-premium/nave-espacial-fofa-dos-desenhos-animados-do-vetor-icone-ilustracao-logotipo-mascote-mao-desenhada-conceito-trandy-cartoon_519183-83.jpg?w=2000" alt="" />
                </div>
                </Link>
            
                <div className={styles.HambMenu} onClick={() => setShowMenuModalMobile(!showMenuModalMobile)}>
                <div className={styles.suportHambMenu}>
                    <div className={styles.HambMenuitem}>

                    </div>
                    <div className={styles.HambMenuitem}>

                    </div>
                    <div className={styles.HambMenuitem}>

                    </div>
                </div>
                </div>

            </div>
            <div className={styles.MainSearchBar}>
                <div>
                    
                </div>
                <div className={styles.searchhere}>
                <InputSearchBar />
                </div>
            </div>

        </div>
    )
  }
  