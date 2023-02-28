






import React, { useState, useEffect, useContext, useMemo, useRef} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import apiaxios from '../../axiosconfig';


import styles from '@/styles/Pages/Amply/components/NavigationDashboard.module.css'


      
const NavigationDashboard = React.memo((props) => {
  const [logout, MyLogout] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('auth_name'));
  }, []);

  const router = useRouter();

  const propsRef = useRef(props);

  const permissionsMemo = useMemo(() => {
    if (props !== propsRef.current) {
      propsRef.current = props;
    }
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
return (   
  <div className={styles.NavigationDashboard}>
      
      <div className={styles.scrollNavigationHere}>
        <div className={styles.logoHouse}>
            <Link href="/Amply-App/Home">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 284.22 102.64"
                 
                  >
                    <defs>
                      <style>{".cls-1{fill:#424242}.cls-3{fill:#53c0a6}"}</style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M40.6 28.44h8.86v47.2H40.6v-5.46c-4.43 3.71-10 6.49-15.87 6.49a24.79 24.79 0 0 1-17.52-7.11 24.89 24.89 0 0 1 0-35 24.79 24.79 0 0 1 17.52-7.11c5.88 0 11.44 2.78 15.87 6.5Zm0 23.6A15.87 15.87 0 1 0 24.73 68 16 16 0 0 0 40.6 52ZM143.32 50.29v25.35h-8.86V50.29a14 14 0 1 0-27.92 0v25.35h-8.87V50.29a13.91 13.91 0 1 0-27.82 0v25.35H61v-47.2h8.86V33c4-3.1 8.86-5.47 13.91-5.47a23.07 23.07 0 0 1 16.18 7 16.8 16.8 0 0 1 2.16 2.58 27.92 27.92 0 0 1 2.27-2.58 23.07 23.07 0 0 1 16.18-7 22.69 22.69 0 0 1 22.77 22.78ZM202.24 52a24.63 24.63 0 0 1-24.73 24.63c-5.88 0-11.44-2.78-15.87-6.49v32.46h-8.87V28.44h8.87v5.47c4.43-3.72 10-6.5 15.87-6.5A24.63 24.63 0 0 1 202.24 52Zm-8.86 0a15.87 15.87 0 1 0-15.87 16 16 16 0 0 0 15.87-16ZM211.19 75.64V0h8.86v75.64Z"
                        />
                        <path
                          d="M246.63 102.64h-9.58l11-27-19.16-47.2h9.58l14.32 35.45 14.33-35.45h9.58Z"
                          style={{
                            fill: "#ee2e7b",
                          }}
                        />
                        <path className="cls-3" d="M254.12 102.64H252l30.08-74.2h2.1Z" />
                        <circle className="cls-3" cx={24.58} cy={51.8} r={10.75} />
                      </g>
                    </g>
                  </svg>  
            </Link> 
            
        </div>
       
       
        <div className={styles.blockOptions}>
            <h3>OPTIONS</h3>
            
                <Link href="/Amply-App/Home">
                {router.pathname === "/Amply-App/Home" ? 
                <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={styles.homeSVG} style={{stroke:'white', fill:'white'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={styles.homeSVG} style={{stroke:'white', fill:'white'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                    <p>Home</p>
                </div> 
                :   
                <div className={styles.ItemDashboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={styles.homeSVG} style={{stroke:'black', fill:'transparent'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={styles.homeSVG} style={{stroke:'black', fill:'transparent'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                    <p>Home</p>
                </div>}
                </Link>
                <Link href="/Amply-App/Profile">
                {router.pathname === "/Amply-App/Profile" ? 
                <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.profileSVG} style={{stroke:'white', fill:'white'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle className={styles.profileSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.profileSVG} style={{stroke:'white'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                    <p>Perfil</p>
                </div> 
                :   
                <div className={styles.ItemDashboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.profileSVG} style={{stroke:'black'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle style={{stroke:'black'}} className={styles.profileSVG} cx="12" cy="12" r="11.5"/><path className={styles.profileSVG} style={{stroke:'black'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                    <p>Perfil</p>
                </div>}
              </Link>
            {permissionsMemo.props.Dashboard &&
                <Link href="/Amply-App/Dashboard"> 
                {router.pathname === "/Amply-App/Dashboard" ? 
               
                <div className={` ${styles.ItemDashboard}   ${styles.ItemDashboardRoute}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.dashboardSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.dashboardSVG} style={{stroke:'white'}} d="M3,12a9,9,0,0,1,18,0"/><line className={styles.dashboardSVG} style={{stroke:'white'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={styles.dashboardSVG} style={{stroke:'white', fill:'white'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                    <p>Dashboard</p>
                </div> 
                :   
                <div className={styles.ItemDashboard} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.dashboardSVG} style={{stroke:'black'}} cx="12" cy="12" r="11.5"/><path className={styles.dashboardSVG} style={{stroke:'black'}} d="M3,12a9,9,0,0,1,18,0"/><line className={styles.dashboardSVG} style={{stroke:'black'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={styles.dashboardSVG} style={{stroke:'black'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                    <p>Dashboard</p>
                </div>}
                </Link>
            }
            {permissionsMemo.props.Website &&
                <Link href="/Amply-App/Website">
                {router.pathname === "/Amply-App/Website" ? 
               
               <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={styles.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.websiteSVG} style={{stroke:'white'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={styles.websiteSVG} style={{stroke:'white'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={styles.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={styles.websiteSVG} style={{stroke:'white'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                    <p>Website</p>
                </div> 
                :   
                <div className={styles.ItemDashboard} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={styles.websiteSVG} style={{stroke:'black'}}  cx="12" cy="12" r="11.5"/><path className={styles.websiteSVG} style={{stroke:'black'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={styles.websiteSVG} style={{stroke:'black'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={styles.websiteSVG} style={{stroke:'black'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={styles.websiteSVG} style={{stroke:'black'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                    <p>Website</p>
                </div>}
                </Link>
            }
            {permissionsMemo.props.Leads &&
                <Link href="/Amply-App/Leads">
                {router.pathname === "/Amply-App/Leads" ? 
                
                <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="8"/><circle className={styles.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="4"/><polyline className={styles.leadsSVG2} style={{stroke:'white', fill:'white'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={styles.leadsSVG2} style={{stroke:'white', fill:'white'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
                    <p>Leads</p>
                </div> 
                :   
                <div className={styles.ItemDashboard} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="8"/><circle className={styles.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="4"/><polyline className={styles.leadsSVG2} style={{stroke:'black'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={styles.leadsSVG2} style={{stroke:'black'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
                    <p>Leads</p>
                </div>}
                </Link>
            }
        
     
            
            {permissionsMemo.Blog &&
            <Link href="/Amply-App/Blog">
            {router.pathname === "/Amply-App/Blog" ? 
             <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.profileSVG} style={{stroke:'white', fill:'white'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle className={styles.profileSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.profileSVG} style={{stroke:'white'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                <p>Blog</p>
            </div> 
            :   
            <div className={styles.ItemDashboard}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.profileSVG} style={{stroke:'black'}} d="M15.5,8.2a3.5,3.5,0,0,1-4.15,3.44A3.8,3.8,0,0,1,8.5,8V7a3.8,3.8,0,0,1,2.85-3.61A3.5,3.5,0,0,1,15.5,6.8Z"/><circle style={{stroke:'black'}} className={styles.profileSVG} cx="12" cy="12" r="11.5"/><path className={styles.profileSVG} style={{stroke:'black'}} d="M4.16,20.41A8.52,8.52,0,0,1,12,15.5a8.52,8.52,0,0,1,7.84,4.91"/></g></g></svg>
                <p>Blog</p>
            </div>}
            </Link>
            }
        </div>
        <div className='blockOptions'>
            <h3>OUTROS</h3>
            {permissionsMemo.Users &&
                <Link href="/Amply-App/Users">
                {router.pathname === "/Amply-App/Users" ? 
                <div className={`${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.84 20"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.usersSVG} style={{stroke:'white', fill:'white'}} d="M18.41,5.39a3,3,0,1,1-6,0V3.61a3,3,0,1,1,6,0Z"/><circle className={styles.usersSVG} style={{stroke:'white', fill:'white'}} cx="7.41" cy="3.5" r="2.5"/><path className={styles.usersSVG} style={{stroke:'white', fill:'white'}} d="M9.93,11.64A6,6,0,0,0,.52,15.35a1,1,0,0,0,1,1.15h4.9"/><path className={styles.usersSVG} style={{stroke:'white', fill:'white'}} d="M15.41,11.5h0a8,8,0,0,0-7.92,6.86,1,1,0,0,0,1,1.14H22.33a1,1,0,0,0,1-1.14A8,8,0,0,0,15.41,11.5Z"/></g></g></svg>
                <p>Usuários</p>
                </div> 
                :   
                <div className={styles.ItemDashboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.84 20"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.usersSVG} style={{stroke:'black'}} d="M18.41,5.39a3,3,0,1,1-6,0V3.61a3,3,0,1,1,6,0Z"/><circle className={styles.usersSVG} style={{stroke:'black'}} cx="7.41" cy="3.5" r="2.5"/><path className={styles.usersSVG} style={{stroke:'black'}} d="M9.93,11.64A6,6,0,0,0,.52,15.35a1,1,0,0,0,1,1.15h4.9"/><path className={styles.usersSVG} style={{stroke:'black'}} d="M15.41,11.5h0a8,8,0,0,0-7.92,6.86,1,1,0,0,0,1,1.14H22.33a1,1,0,0,0,1-1.14A8,8,0,0,0,15.41,11.5Z"/></g></g></svg>
                    <p>Usuários</p>
                </div>}
                </Link>
            }
            <Link href="/Amply-App/Config">
            {router.pathname === "/Amply-App/Config" ? 
            <div className={`${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2"  data-name="Layer 2"><g id="transport" ><path className={styles.configSVG} style={{stroke:'white'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={styles.configSVG} style={{stroke:'white' }} cx="12" cy="12" r="4.5"/></g></g></svg>
                <p>Configurações</p>
            </div> 
            :   
            <div className={styles.ItemDashboard}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.configSVG} style={{stroke:'black'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={styles.configSVG} style={{stroke:'black'}}  cx="12" cy="12" r="4.5"/></g></g></svg>
                <p>Configurações</p>
            </div>}
            </Link>
     
            {logout ?
              
            <> 
            <div className={` ${styles.ItemDashboard}  ${styles.ItemDashboardRoute}`} onClick={letsLogout} style={{cursor:  'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23.78"><defs></defs><g id="Layer_2"  data-name="Layer 2"><g id="transport"><path className={styles.logoutSVG} style={{stroke:'white'}} d="M.5,8.28l8.26,7.06a1,1,0,0,0,1.74-.67V1.5A1,1,0,0,0,8.84.75Z"/><path className={styles.logoutSVG} style={{stroke:'white'}}  d="M10,9.91h2.08c3.74,0,6.77,3.51,6.77,7.2a7,7,0,0,1-3.64,6.17h0A9.52,9.52,0,0,0,22.5,14a9.31,9.31,0,0,0-9.37-9.25H10"/></g></g></svg> <p>Sair Agora</p>
            </div> 
        
            <h3 onClick={() => MyLogout(false)}>Não Sair</h3>
            </>
            :   
            //onClick={letsLogout}
            <div className={styles.ItemDashboard} onClick={() => MyLogout(true)} style={{cursor:  'pointer'}}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23.78"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.logoutSVG} d="M.5,8.28l8.26,7.06a1,1,0,0,0,1.74-.67V1.5A1,1,0,0,0,8.84.75Z"/><path className={styles.logoutSVG} d="M10,9.91h2.08c3.74,0,6.77,3.51,6.77,7.2a7,7,0,0,1-3.64,6.17h0A9.52,9.52,0,0,0,22.5,14a9.31,9.31,0,0,0-9.37-9.25H10"/></g></g></svg> <p>Logout</p>
            </div>}
        
      

        </div>
      </div>
      <div className={styles.UserDataNavigation}> 
      
        <Link className={styles.linkProfile} href="/Amply-App/Profile">
            <div className={styles.photoClient}>
                <img src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png" alt="" />
            </div>
            <div className={styles.nameClient}>
                <div>
                    <p>{name}</p>
                <h3>CEO E TESTER</h3></div>
            </div>
        </Link>
      </div>
    
  </div>
)
});

export default NavigationDashboard;