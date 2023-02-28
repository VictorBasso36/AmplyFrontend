

import styles from '@/styles/Components/Navbar/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'


import CloseBtn from '../../InputsAndButtons/closeBTN'
import PainelDeControle from '../../InputsAndButtons/PainelDeControle'

let scrollStylesMargin
let margintoprefine
export default function Navbar() {
  const [hambMenu,setHambMenu] = useState(false)
  useEffect(() => {
    if (hambMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [hambMenu]);

    // fixednav
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (showModal) {
          document.documentElement.style.overflow = "hidden";
          ScrollToTop()
        } else {
          document.documentElement.style.overflow = "";
        }
    }, [showModal]);

    const [NavScroll, setNavScroll] = useState(true);
    useEffect(()=>{
      window.addEventListener('load', function(){
          if(window.scrollY >= 180){
              margintoprefine="0"
          } else{
              margintoprefine="-100"
              setNavScroll(false)
          }
          
      })
      window.addEventListener('scroll', function(){
    
          if (window.innerWidth < 550) {
              scrollStylesMargin = 180
          
          }else{
              scrollStylesMargin = 280
          
          }
    
          if(window.scrollY < scrollStylesMargin){
              
                  margintoprefine = "-100"
          
              } else{
                  margintoprefine = "0"
              }
          if(window.scrollY > scrollStylesMargin){
              setNavScroll(true)
              margintoprefine = "0"
    
          } else{
              setNavScroll(false)
              margintoprefine = "-100"
          } 
          
      
      })
    })
  



    
  return (
    <> 
        {/*FixedNavBar  */}
        <div className={styles.scrollBarMain}  style={{marginTop : margintoprefine + 'px'}}>
            <div className={styles.scrollBarMainCotainer}>
            <Link href="#__next" title="Ancora Home Amply" scroll={false}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
            
                  className={styles.MainLogoFixed}
                  viewBox="0 0 193 70"
                >
                  <image
                 
                    data-name="Objeto Inteligente de Vetor"
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
              </Link> 
              <div>
              <div className={`${styles.hambMenuhere} + ${styles.fixedmenu}`}  onClick={() => setHambMenu(true)}>
                      <div className={styles.hambMenuhereContainer}>
                        <div className={styles.MenuItem}>

                        </div>
                        <div className={styles.MenuItem}>

                        </div>
                        <div className={styles.MenuItem}>

                        </div>
                      </div>

                    </div>
              </div>
            </div>
        </div>

        {/* NavBarMain */}
        {hambMenu && 
        <div  className={styles.ModalNavbar} onClick={() => setHambMenu()}>
  

          <div className={styles.containerModal}>
            <div className={styles.CloseButtonMainMenu}>
              <CloseBtn onClick={() => setHambMenu()}/>
            </div>
              <ul>
                <li><Link title="Ancora Site Home" href="#__next" scroll={false}>HOME</Link></li>
                {/* <li><Link href="#Portfolio" scroll={false}>PORTFOLIO</Link></li> */}
                <li><Link title="Ancora Site Metodos" href="#Metodos" scroll={false}>MÉTODOS</Link></li>
                <li><Link title="Ancora Site Preço" href="#Preco" scroll={false}><span>PREÇO</span></Link></li>
                <li><Link title="Ancora Site Contato" href="#Contato" scroll={false}>CONTATO</Link></li>
              </ul>
            <div className={styles.ModalSocialMedia}>
              <div className={styles.ModalSocialLinks}>
              <Link title="Facebook Amply" href="https://www.facebook.com/amplytecnologia/" target="_blank">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            >
                            <image
                                width="38"
                                height="38"
                                xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEjUlEQVRYhb2Ya4xdUxTHf/fMvS3RaoeIGUOFKgkhHtUWjS8VfCER9QiqQUSoEGFMJU1KUJrQiHr2A0pFU68EiTRII/WojqTEs3wopu1IfdFOU4NhZJn/Mevuvc+59/bhn0zm7r3XWvt/9l57rbV3ZVvHfHYDRwLTgDOAY4DDgANlZgewFfge+Aj4FPix1SmqUU85jMxs4BKgExhbIH2a/s8TyZeBV4DeSLIAza6YEboFuDIaaQ0rgGXA2j0lVgPuArqBccHYgLbqS6BPW4i2dBJwAnBWQu9PYBFwHzAUzSiUbaX5zbPAua5vGPgEeBz4ANiiiVIYIxsztaUz3McuVPsaoD+hSxb1jMD8582AlK3M5XJ425IfSkgZ/pDMCulcBnztxs8D3gA6Is0CYvaV7wKnur6ngOnAqki6eaySjWVOY6rm6mxErE1feLzruwO4Edi1B6Ry7ARukM/mMF98IeTS1j1upm/fA8x17VuBRyLz5TDf6tIWHQK060AMaXvRodkOnK/20fLf93PLnqXFnttc+0ng0VIKMebKbz4DvgW+0f8vtOoe9sFPu/btwMkhsQow3x3t74A7o2mLUdN2PCenbneSmewemtDuVoYwjFdoqiN2iiK6V9gZmSlGD3BV4egIalHPSCzsce1L81XLifmIvl7b0Sy6FKdS6Fee3KzUlMLrio05rkAB1qL0xW7gsYRyGaYmYpE5+gLlx0HN82uJjScUSlAeXlpV8JukTlNeE6mVY3Ji1FZhcdRbjDU6pRNUuczIxLQilfVFKaIE7Ymh1VFPOfo1N+IyPVM9lcOO9V+lJmKMiXrKty2FIc2dY0om583Rl1BqhFS+/D3qaYzNTqKrqviRY6AJA/vLmYddO4RF+gOci1T0AYOR5Ci2u9/j/QSGvyPxeljFulJ1Vj7JhEgKlsr5K8q/mYLnM5FkAapBIE1NEsK2/uCotx4H6c9jWyRVDz/3QBYEviMi8Rgpn2oEO1BfNZA53P3emikv5jhRS1+ESuCTzcLK7l9KZG3nTnLtjVWlg2FNOk1RfEukOoIhFXrH6uSZ3tnA6YHcW6pWawonG4HfImuj6HA2/i3fjdg6lcBHAROBWcDzkeoosbAUWpAgtqTFDDLL+dgmI5Ypdr3mhG6K1MoR3oIoyAZluNmNWX7ty7R0L7oBS1EXlRjZ25itQiDHS7iyZ4OY5li8m07eKiwQP+h0Vqr6rSutF7mYNgV4+H8gtsRVJzs8SU9sQ0DmepXb+wpW41/nbNvcn6eIGe4F3nPtB4C79wExK6cfcu139GTwH0JiFqHnBFF6oe6ayRtzi5iofOn9ym74V4d5OnUTt6LtHL1r5bA7wYcyUAnkU/Vb+FhS0Qev03tFjl7FsJ9DAyliSPDCoBK1S+lyGbtWAbkWVCch2cnyo14F7eOczNuaI5ncGz1Dtalc6UkE0l26OXf6i6qwWrXdBYnHvUFFgPvLyqxWHu4sOs+JRlrDct2+P26k1eobrOVEu+rZxdRWar8G8rY6VlbZS8+rgd/uVWI57LpnaeRMBeNGj8M/tWQd+Afxz/Fj2RV6RQAAAABJRU5ErkJggg=="
                            ></image>
                            </svg>
                </Link>
                <Link title="Instagram Amply" href="https://www.instagram.com/amply.tec.br/" target="_blank"> 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="35"
                            height="35"
                            viewBox="0 0 44 44"
                        >
                                <image
                                width="44"
                                height="44"
                                xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAEhElEQVRYhcWZXYxdUxTHf26nJJ3JSLwZDCJNpiriwVc7EkVHVVEJfeAFGUEH9fGgr8RTJUhQo9NUQuIFpRqq2gklWioivpsmRVJUeaCjoyGmvbL0f9jW3uer7p35Jye5Z++11/7fddZZa+11jvqpdzklmAVcDQwAJwAnAjOKl1TGAeA7XaPAOmBH0eIiwucAK4CLopn24j3gPuDd1C6NaASOBoaB7VNA1jAHeAd4EpjuJz3h44BNwG1m/UjV5MH2XgpsFqckYbPsS8CFjlYTeBW4AZgJdEphK65O6bwReE17hTAua0NLh4QfS5D9XI/oSuBZYJdelFbhgHQ+A1wBzAW+cLrnAY96wucBtzjBTVKwfRJd4X0ZaLMbHwLOJiC8wvmsWfZaYH+ksv3Yr72/DHYybg9lhE93rmB+dPMkkj0FeBi4C+jQ2K/iEPq0Ray+DiWFEBsm2Q1eBs7S76beJRSPNwILA9nFZuFLnILnI5XlsOx3O/C6MtW4rh0ywJBkUugNxk4u4TLfCJ/kBrcllOahBxgBvgGeAC6zx6ZwZVefLLRSMquA452ue4GfgY8C6+Zx6bXUPC7lGbqA33IIhrAw9BzQHc0Uw/zzOlm+DJ16UhnGG44sFckOqVCpSxatWa9MVgbPpStVS5TBLPs4MM3JfQIsU9Tp0jVbb/+nTnaadFxeslcEcwmfDotqiB69SKFlfxfRNcChaMVhNBSmzEePCcbH5PN7oxX/4j/86lr4/gTZBcDqArJobkSyfwTjx0pnZdQhbGHpJje2TKVgVbwN3ONkB3UwqIQ6hBcHmQj57JpIqhwW2j4LpEznVe0gvMjdF/lsEQ4l/qjXnYs6hE9z96ORRHX4aszrzkUdwj3u/ttIojp2O8m8tB2hDmEf/v4P/L6VXasO4T3u3tcgdeDXet25qEP4K3c/EElUh1+7qx2EfbEyeASJB6XlwRLduaiz4SvARHB/ptJtXdwKnBGsmZDulhO2dtLTbix10i6CnYAfcfOr2+XDKO+PBfdWyLyhUrFIV0Ml6UZX/OwDHoikC1C0SQo/ANcDBx1payt9rFJytmrsrLy8W2l8pSN7ULp+TOyTi7rlZYalOTVxVRjZO4CnKshH5aWv6v0JJIVhFSxjibky7NMhoApZz+XvI5J3eH9IzMMGFd+rXPTIw4T+aJ98uQp82bmnQzXBzGCwv0Yg36tO54OyuFnu1CCTme6v1UxcnzBOGfrd/O4OVV0XB4NL1Jyrg+9lveGa68qwxM2PNnT6DbFITcCpxvnqc4RY19ChcoubGDnCI3yr0K0kFUast4CdWRxe7sKHxc8Xp4h0t5rYs4Kxpr57/JM4PkiEmQE15OZEKtuHueoRz3c7WGL6EPcVabqa2POccFNh6AVgq2qKVnXhZ+i00a8XbGEkcdgVrD3wpyeMPoCsTZCeKhjZa4Bfsv19LWFdxEv1CFp5JKqLprqhC0KyKcLI9NbrPRd4M5ptP6zFegFwZ+YGIcLGiIc5uTW7LZVal95eBPM3y2Kt/HRr2dCu7NPtzlxp4C/utu6iQGovYgAAAABJRU5ErkJggg=="
                                ></image>
                            </svg>
                  </Link>
                  <Link title="Whatsapp Amply" href="https://api.whatsapp.com/send/?phone=5511994740494&text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+vi+que+voc%C3%AAs+s%C3%A3o+os+melhores+nisso%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0" target="_blank">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="35"
                                height="35"
                                viewBox="0 0 54 54"
                            >
                                <image
                                width="54"
                                height="54"
                                xlinkHref="data:img/png;base64,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"
                                ></image>
                            </svg>
                  </Link>
                  <Link href="https://github.com/" title="Amply GITHUB"  target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="35"
                                height="35"
                                viewBox="0 0 48 47"
                            >
                            <image
                            width="48"
                            height="47"
                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAE2UlEQVRogcWaa4hVVRTHf3PKcmpMx8wU0yQ0tQdFz6EksqIXEWX1ocKKoOxL9n74qb5EUESjEDFFJRpRFPRQemGOYTHB1DeppodpIOktNVLLJurGcv7Hzj37nLP3mXvP7QeXy6y9795r7ddae+3pqM14iBYwBbgAOBuYCxwHHAl0qek9wA5gE/A18BnQD2xrtutmDDAFbwQWAWc4pWEMAquAV2RgaaJR/OYYoBf4EVjWhPLGmcByYAvwNDDNqeGhjAFjgLuAr/R9mFNj9BwO3A18AzwKHNpqA+ZounsT67oKbFAe0R45vlUGXAN8DpzilFTHqerz6mYNuAV4teJRz2Mc8DpwR075fooMWAy8BBzslLSPg4BngTvzeswzwJbNM470/8NOqKuyes8ywDbsClmfZi+wz5G2jn3qI43pshKY7TPgEOC1gjW/AOjU2f8k8LNTozw14AngdLV9YU4L46TbmKQw7YkfBh53fjqCKXs0UE/IzNB7gKXq3PgJ2Azs0sfo1mcmMFWyP4DHdDQnR70D+AWY6GgwwoMaPMcA84JDcipZbADOy5Abs4ATdfRtdUobmaYZ3Ah875SO8ClwjiMdYY98hA1UwwnzQIHy6Id5fKdPCFsDjCzqy2b9fuA+EnvAArPbnKqNdDqS6vCFEoul8wEDbgiIbU7Q+qyaDvVVhK2U65MG3FRQOeYfzxJrFV3qy8ei2ICpOsKKqGuWitZmq9itvuqe9iwUnxzpbPctjbd1g2oX64A1nr5M5wWRroE+lnvKq2BZQJs9ke6wRfwGfFJQXhUbtJyKmBvJCRXxLfBXQXlVDAf4lllmwARH3EjNkbQPX6zVHRUEbjFjHUn78DnPrigjIk0zyZG0j6M8PUWm/O+OuBFfI1XiG7y9UcA6s6zbdEdaPTMDDKiZAT84YpeLHUn1XBLQw5ZIcbmP6zzlVXBtQJsbI11CfNhonO+p00rsWnlRQHuDZsBHAYETCieOcKStZ3xgGGER67pIKe5Bp9jlZAV1VV5s7E7yjq6nPkzn7bEPeN5TOcaW0RfAWU5J8/So7bx7d5o+Ek7M8vM7UxXeBG6Vcclc0DxgQLNxaZlMcgY2m1cA7+oi7wssY3Yo5XnAAHNmL6YqHQt8CNyu0dmcKLPfXQm8J8PXKnt2mtOVS4+yfh8r7bIauKxkqv8FpWUa0ipTlPtPBncWyF2uqZ2nEyvv7rxJ+8Tn2S32+rIJ57hLumwnZfU2JaiSTNZS6pZxS5zm/qM3QHl0LQ05ZfJYGiufNsB4To8LSabHORhN3ZIMRW2PfJDTYRZrM2QhDKQPnKxHvjmq2J2Q7daeiFOFk+Rsxmvm+gNuT0kmjuJRb6eydUM+A9BF/30le2P6fI8NJbB2/yxRf1jRwPp0Qd7O71f2K4n9/VSTx2ZMmQRZXVlDR3k8ry8r9N2XmIl79W61SidSTafWDB3DfzutZBNqwLCUX+mUiLwllORc4K2A2HxsiWXRmXEQpLH9tjBv5GPyllAS85DztbGLyHrRycM3AwNyeIXKU8L7DWkmbtbjQxZl1nVe3V/14D1fj95eyrjvutbiSXoSSh+DISF5TDp5ay805twsFrLvkOTufkbzhGpe0DaO/UuAJWEtS2yhRogXjrE4xjy3JZXfAF7OCCb9AP8CMHrsphhEWd8AAAAASUVORK5CYII="
                            ></image>
                            </svg>
                  </Link>
              </div>
              <PainelDeControle/>
            </div>
          </div>
        </div>
        }
        <nav  className={styles.NavbarMain} >
            <div className={styles.NavbarMainContainer}>
              <Link href="#__next" title="Ancora Amply Home" scroll={false} className={styles.LinkMainHover}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="250"
                  className={styles.MainLogo}
                  viewBox="0 0 193 70"
                >
                  <image
                 
                    data-name="Objeto Inteligente de Vetor"
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
              </Link>  
              <ul className={styles.navigation}>
                <div className={styles.navigationLinks}>
                  <li>
                    <Link href="#__next" title="Ancora Amply Home" scroll={false}>
                      HOME
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#Portfolio" scroll={false}>
                      PORTFOLIO
                    </Link>
                  </li> */}
                  <li>
                    <Link href="#Metodos" title="Ancora Amply Metodos" scroll={false}>
                      MÉTODO
                    </Link>
                  </li>
                  <li>
                    <Link href="#Preco" title="Ancora Amply Preco" scroll={false}>
                     <span>PREÇO</span> 
                    </Link>
                  </li>
                  <li>
                    <Link href="#Contato" title="Ancora Amply Contato" scroll={false}>
                      CONTATO
                    </Link>
                  </li>
                </div>
                <div className={styles.navigationLinksExternos}>
                  <div className={styles.socialItens}>
                  <li>
                    <Link title="Amply Contato Whatsapp" href="https://api.whatsapp.com/send/?phone=5511994740494&text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+vi+que+voc%C3%AAs+s%C3%A3o+os+melhores+nisso%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0" target="_blank" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="35"
                        height="35"
                        viewBox="0 0 54 54"
                      >
                        <image
                          width="54"
                          height="54"
                          xlinkHref="data:img/png;base64,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"
                        ></image>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link title="amply instagram"  href="https://www.instagram.com/amply.tec.br/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="35"
                        height="35"
                        viewBox="0 0 44 44"
                      >
                        <image
                          width="44"
                          height="44"
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAEhElEQVRYhcWZXYxdUxTHf26nJJ3JSLwZDCJNpiriwVc7EkVHVVEJfeAFGUEH9fGgr8RTJUhQo9NUQuIFpRqq2gklWioivpsmRVJUeaCjoyGmvbL0f9jW3uer7p35Jye5Z++11/7fddZZa+11jvqpdzklmAVcDQwAJwAnAjOKl1TGAeA7XaPAOmBH0eIiwucAK4CLopn24j3gPuDd1C6NaASOBoaB7VNA1jAHeAd4EpjuJz3h44BNwG1m/UjV5MH2XgpsFqckYbPsS8CFjlYTeBW4AZgJdEphK65O6bwReE17hTAua0NLh4QfS5D9XI/oSuBZYJdelFbhgHQ+A1wBzAW+cLrnAY96wucBtzjBTVKwfRJd4X0ZaLMbHwLOJiC8wvmsWfZaYH+ksv3Yr72/DHYybg9lhE93rmB+dPMkkj0FeBi4C+jQ2K/iEPq0Ray+DiWFEBsm2Q1eBs7S76beJRSPNwILA9nFZuFLnILnI5XlsOx3O/C6MtW4rh0ywJBkUugNxk4u4TLfCJ/kBrcllOahBxgBvgGeAC6zx6ZwZVefLLRSMquA452ue4GfgY8C6+Zx6bXUPC7lGbqA33IIhrAw9BzQHc0Uw/zzOlm+DJ16UhnGG44sFckOqVCpSxatWa9MVgbPpStVS5TBLPs4MM3JfQIsU9Tp0jVbb/+nTnaadFxeslcEcwmfDotqiB69SKFlfxfRNcChaMVhNBSmzEePCcbH5PN7oxX/4j/86lr4/gTZBcDqArJobkSyfwTjx0pnZdQhbGHpJje2TKVgVbwN3ONkB3UwqIQ6hBcHmQj57JpIqhwW2j4LpEznVe0gvMjdF/lsEQ4l/qjXnYs6hE9z96ORRHX4aszrzkUdwj3u/ttIojp2O8m8tB2hDmEf/v4P/L6VXasO4T3u3tcgdeDXet25qEP4K3c/EElUh1+7qx2EfbEyeASJB6XlwRLduaiz4SvARHB/ptJtXdwKnBGsmZDulhO2dtLTbix10i6CnYAfcfOr2+XDKO+PBfdWyLyhUrFIV0Ml6UZX/OwDHoikC1C0SQo/ANcDBx1payt9rFJytmrsrLy8W2l8pSN7ULp+TOyTi7rlZYalOTVxVRjZO4CnKshH5aWv6v0JJIVhFSxjibky7NMhoApZz+XvI5J3eH9IzMMGFd+rXPTIw4T+aJ98uQp82bmnQzXBzGCwv0Yg36tO54OyuFnu1CCTme6v1UxcnzBOGfrd/O4OVV0XB4NL1Jyrg+9lveGa68qwxM2PNnT6DbFITcCpxvnqc4RY19ChcoubGDnCI3yr0K0kFUast4CdWRxe7sKHxc8Xp4h0t5rYs4Kxpr57/JM4PkiEmQE15OZEKtuHueoRz3c7WGL6EPcVabqa2POccFNh6AVgq2qKVnXhZ+i00a8XbGEkcdgVrD3wpyeMPoCsTZCeKhjZa4Bfsv19LWFdxEv1CFp5JKqLprqhC0KyKcLI9NbrPRd4M5ptP6zFegFwZ+YGIcLGiIc5uTW7LZVal95eBPM3y2Kt/HRr2dCu7NPtzlxp4C/utu6iQGovYgAAAABJRU5ErkJggg=="
                        ></image>
                      </svg>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="git" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="35"
                        height="35"
                        viewBox="0 0 48 47"
                      >
                        <image
                          width="48"
                          height="47"
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAE2UlEQVRogcWaa4hVVRTHf3PKcmpMx8wU0yQ0tQdFz6EksqIXEWX1ocKKoOxL9n74qb5EUESjEDFFJRpRFPRQemGOYTHB1DeppodpIOktNVLLJurGcv7Hzj37nLP3mXvP7QeXy6y9795r7ddae+3pqM14iBYwBbgAOBuYCxwHHAl0qek9wA5gE/A18BnQD2xrtutmDDAFbwQWAWc4pWEMAquAV2RgaaJR/OYYoBf4EVjWhPLGmcByYAvwNDDNqeGhjAFjgLuAr/R9mFNj9BwO3A18AzwKHNpqA+ZounsT67oKbFAe0R45vlUGXAN8DpzilFTHqerz6mYNuAV4teJRz2Mc8DpwR075fooMWAy8BBzslLSPg4BngTvzeswzwJbNM470/8NOqKuyes8ywDbsClmfZi+wz5G2jn3qI43pshKY7TPgEOC1gjW/AOjU2f8k8LNTozw14AngdLV9YU4L46TbmKQw7YkfBh53fjqCKXs0UE/IzNB7gKXq3PgJ2Azs0sfo1mcmMFWyP4DHdDQnR70D+AWY6GgwwoMaPMcA84JDcipZbADOy5Abs4ATdfRtdUobmaYZ3Ah875SO8ClwjiMdYY98hA1UwwnzQIHy6Id5fKdPCFsDjCzqy2b9fuA+EnvAArPbnKqNdDqS6vCFEoul8wEDbgiIbU7Q+qyaDvVVhK2U65MG3FRQOeYfzxJrFV3qy8ei2ICpOsKKqGuWitZmq9itvuqe9iwUnxzpbPctjbd1g2oX64A1nr5M5wWRroE+lnvKq2BZQJs9ke6wRfwGfFJQXhUbtJyKmBvJCRXxLfBXQXlVDAf4lllmwARH3EjNkbQPX6zVHRUEbjFjHUn78DnPrigjIk0zyZG0j6M8PUWm/O+OuBFfI1XiG7y9UcA6s6zbdEdaPTMDDKiZAT84YpeLHUn1XBLQw5ZIcbmP6zzlVXBtQJsbI11CfNhonO+p00rsWnlRQHuDZsBHAYETCieOcKStZ3xgGGER67pIKe5Bp9jlZAV1VV5s7E7yjq6nPkzn7bEPeN5TOcaW0RfAWU5J8/So7bx7d5o+Ek7M8vM7UxXeBG6Vcclc0DxgQLNxaZlMcgY2m1cA7+oi7wssY3Yo5XnAAHNmL6YqHQt8CNyu0dmcKLPfXQm8J8PXKnt2mtOVS4+yfh8r7bIauKxkqv8FpWUa0ipTlPtPBncWyF2uqZ2nEyvv7rxJ+8Tn2S32+rIJ57hLumwnZfU2JaiSTNZS6pZxS5zm/qM3QHl0LQ05ZfJYGiufNsB4To8LSabHORhN3ZIMRW2PfJDTYRZrM2QhDKQPnKxHvjmq2J2Q7daeiFOFk+Rsxmvm+gNuT0kmjuJRb6eydUM+A9BF/30le2P6fI8NJbB2/yxRf1jRwPp0Qd7O71f2K4n9/VSTx2ZMmQRZXVlDR3k8ry8r9N2XmIl79W61SidSTafWDB3DfzutZBNqwLCUX+mUiLwllORc4K2A2HxsiWXRmXEQpLH9tjBv5GPyllAS85DztbGLyHrRycM3AwNyeIXKU8L7DWkmbtbjQxZl1nVe3V/14D1fj95eyrjvutbiSXoSSh+DISF5TDp5ay805twsFrLvkOTufkbzhGpe0DaO/UuAJWEtS2yhRogXjrE4xjy3JZXfAF7OCCb9AP8CMHrsphhEWd8AAAAASUVORK5CYII="
                        ></image>
                      </svg>
                    </Link>
                  </li> */}
                  </div>
                  
                  <li className={styles.Lihere}>
                    <div className={styles.ButtonLoginHere}>
                      <PainelDeControle/>
                    </div>
                      
                    <div className={styles.hambMenuhere} onClick={() => setHambMenu(true)}>
                      <div className={styles.hambMenuhereContainer}>
                        <div className={styles.MenuItem}>

                        </div>
                        <div className={styles.MenuItem}>

                        </div>
                        <div className={styles.MenuItem}>

                        </div>
                      </div>

                    </div>
                  </li>

                
                </div>
              </ul>
            </div>
        </nav>
    </>
  )
}
