




import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '@/styles/Pages/Amply/components/NavigationDashboardMobile.module.css'



export default function NavigationDashboardMobile() {

  const location = useRouter();


  useEffect(() => {

  }, [location]);   

return (   
  <div className={styles.NavigationDashboardMobile}>    
        <Link href="/Amply-App/Config">
            {location.pathname === "/Amply-App/Config" ? 
                <div className={`${styles.MobileItemNavigate} ${styles.MobileItemNavigateHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2"  data-name="Layer 2"><g id="transport" ><path className={styles.configSVG} style={{stroke:'white'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={styles.configSVG} style={{stroke:'white'}} cx="12" cy="12" r="4.5"/></g></g></svg>
                </div> 
            :
                <div className={styles.MobileItemNavigate}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><path className={styles.configSVG} style={{stroke:'black'}} d="M4.58,7.87,2.81,4.93,4.93,2.81,7.87,4.58h0a8,8,0,0,1,1.8-.75L10.5.5h3l.83,3.33a8,8,0,0,1,1.8.75h0l2.94-1.77,2.12,2.12L19.42,7.87h0a8,8,0,0,1,.75,1.8l3.33.83v3l-3.33.83a8,8,0,0,1-.75,1.8h0l1.77,2.94-2.12,2.12-2.94-1.77h0a8,8,0,0,1-1.8.75L13.5,23.5h-3l-.83-3.33a8,8,0,0,1-1.8-.75h0L4.93,21.19,2.81,19.07l1.77-2.94h0a8,8,0,0,1-.75-1.8L.5,13.5v-3l3.33-.83a8,8,0,0,1,.75-1.8Z"/><circle className={styles.configSVG} style={{stroke:'black'}}  cx="12" cy="12" r="4.5"/></g></g></svg>
                </div> 
            }
        </Link>
        <Link href="/Amply-App/Leads">
            {location.pathname === "/Amply-App/Leads" ? 
                <div className={`${styles.MobileItemNavigate} ${styles.MobileItemNavigateHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="8"/><circle className={styles.leadsSVG} style={{stroke:'white'}} cx="8.68" cy="8.5" r="4"/><polyline className={styles.leadsSVG} style={{stroke:'white', fill:'white'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={styles.leadsSVG} style={{stroke:'white', fill:'white'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
                  </div>   
            :
                <div className={styles.MobileItemNavigate}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.71 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="8"/><circle className={styles.leadsSVG} style={{stroke:'black'}} cx="8.68" cy="8.5" r="4"/><polyline className={styles.leadsSVG} style={{stroke:'black'}} points="8.5 16.5 4.97 23.5 3.66 20.05 0.5 20.5 3.5 14.5"/><polyline className={styles.leadsSVG} style={{stroke:'black'}} points="14.21 14.5 17.21 20.5 14.05 20.05 12.68 23.5 9.21 16.5"/></g></g></svg>
              </div> 
            }
        </Link>
        <Link href="/Amply-App/Home" >
            {location.pathname != "/Amply-App/Website" && location.pathname !=  "/Amply-App/Dashboard" &&  location.pathname != "/Amply-App/Leads" && location.pathname != "/Amply-App/Config"  ? 
                <div className={`${styles.MobileItemNavigate} ${styles.MobileItemNavigateHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={styles.homeSVG} style={{stroke:'white', fill:'white'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={styles.homeSVG} style={{stroke:'white', fill:'white'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                </div> 
            :
                <div className={styles.MobileItemNavigate}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><polyline className={styles.homeSVG} style={{stroke:'black', fill:'transparent'}}  points="22.5 11.5 11.5 0.5 0.5 11.5"/><polyline className={styles.homeSVG} style={{stroke:'black', fill:'transparent'}} points="2.5 9.5 2.5 23.5 8.5 23.5 8.5 14.5 14.5 14.5 14.5 23.5 20.5 23.5 20.5 9.5"/></g></g></svg>
                </div> 
            
            }
        </Link>
        <Link href="/Amply-App/Website">
            {location.pathname === "/Amply-App/Website" ? 
                <div className={`${styles.MobileItemNavigate} ${styles.MobileItemNavigateHover}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={styles.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.websiteSVG} style={{stroke:'white'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={styles.websiteSVG} style={{stroke:'white'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={styles.websiteSVG} style={{stroke:'white'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={styles.websiteSVG} style={{stroke:'white'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                </div> 
      
            :
                <div className={styles.MobileItemNavigate}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><g id="globe"><circle className={styles.websiteSVG} style={{stroke:'black'}}  cx="12" cy="12" r="11.5"/><path className={styles.websiteSVG} style={{stroke:'black'}} d="M2.47,18.42c2.06-1.25,17-1.25,19.06,0"/><path className={styles.websiteSVG} style={{stroke:'black'}} d="M2,6.3c2,1.34,18,1.34,20,0"/><ellipse className={styles.websiteSVG} style={{stroke:'black'}} cx="12" cy="12" rx="5.5" ry="11.5"/><line className={styles.websiteSVG} style={{stroke:'black'}} x1="0.5" y1="12.5" x2="23.5" y2="12.5"/></g></g></g></svg>
                  </div> 
            }
        </Link>
        <Link href="/Amply-App/Dashboard">
            {location.pathname === "/Amply-App/Dashboard" ? 
                <div className={`${styles.MobileItemNavigate} ${styles.MobileItemNavigateHover}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.dashboardSVG} style={{stroke:'white'}} cx="12" cy="12" r="11.5"/><path className={styles.dashboardSVG} style={{stroke:'white'}} d="M3,12a9,9,0,0,1,18,0"/><line className={styles.dashboardSVG} style={{stroke:'white'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={styles.dashboardSVG} style={{stroke:'white', fill:'white'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                </div>   
            :
                <div className={styles.MobileItemNavigate}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="transport"><circle className={styles.dashboardSVG} style={{stroke:'black'}} cx="12" cy="12" r="11.5"/><path className={styles.dashboardSVG} style={{stroke:'black'}} d="M3,12a9,9,0,0,1,18,0"/><line className={styles.dashboardSVG} style={{stroke:'black'}} x1="12" y1="7.5" x2="12" y2="12.5"/><circle className={styles.dashboardSVG} style={{stroke:'black'}} cx="12" cy="14" r="1.5"/></g></g></svg>
                </div> 
            }
        </Link>

        
  </div>
)
}
  