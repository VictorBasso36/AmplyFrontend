
import styles from '@/styles/Components/Contato/Contato.module.css'

import Link from 'next/link'

import PainelDeControle from '../../InputsAndButtons/PainelDeControle'
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '../../../public/footAmply.json';

export default function Contato() {
    const containerRef = useRef(null);
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationSpeed:4,
      animationData: animationData,
    });

    return () => {
      anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
    };
  }, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez

  return (  
    <>
    <section className={styles.SerVisto} id="Contato">

        <div className={styles.SerVistoContainer}>
            <div ref={containerRef} style={{marginTop:'0px', marginBottom:'10px', width:'90%', maxWidth:'550px', height: 'auto'}} />
            <h3 className={styles.VistoSite}>Seu site precisa <span>SER VISTO!</span></h3>
        </div>
    </section>
    <section className={styles.MainContato}>
        <div className={styles.MainContatoContainer}>
            <div className={styles.DivContatoLeft}>
                <h3>Atendimento</h3>
                <br />
                <br />
                <Link title="Link Telefone Amply" href="tel:+55112695-0021"><h4><span>+55 11</span> 2695-0021</h4></Link>
                <Link title="Link Whatsapp Amply"  target="_blank" href="https://wa.me/5511994740494?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+vi+que+voc%C3%AAs+s%C3%A3o+os+melhores+nisso%2C+pode+me+ajudar%3F"><h4><span>+55 11</span> 99474-0494</h4></Link>
                
                <br />
                <br />
                <Link title="Email Suporte Amply" href="suporte@arque.art.br"><h4><span>suporte</span>  suporte@arque.art.br</h4></Link>
                
                <br />
                <br />
                <Link title="Email Setor Financeiro Amply" href="mailto:financeiro@arque.art.br"><h4><span>financeiro</span> financeiro@arque.art.br</h4></Link>
                
            </div>
            <div className={styles.DivContato}>
                <div className={styles.socialMediaContato}>
                    <div className={styles.socialMediaContatoLinks}>
                            <Link title="Facebook Amply" href="https://www.facebook.com/amplytecnologia/" target="_blank">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            >
                            <image
                                width="35"
                                height="35"
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
                            viewBox="0 0 35 35"
                        >
                                <image
                                width="35"
                                height="35"
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
                                viewBox="0 0 38 38"
                            >
                                <image
                                width="35"
                                height="35"
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
                                viewBox="0 0 38 38"
                            >
                            <image
                            width="35"
                            height="35"
                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAE2UlEQVRogcWaa4hVVRTHf3PKcmpMx8wU0yQ0tQdFz6EksqIXEWX1ocKKoOxL9n74qb5EUESjEDFFJRpRFPRQemGOYTHB1DeppodpIOktNVLLJurGcv7Hzj37nLP3mXvP7QeXy6y9795r7ddae+3pqM14iBYwBbgAOBuYCxwHHAl0qek9wA5gE/A18BnQD2xrtutmDDAFbwQWAWc4pWEMAquAV2RgaaJR/OYYoBf4EVjWhPLGmcByYAvwNDDNqeGhjAFjgLuAr/R9mFNj9BwO3A18AzwKHNpqA+ZounsT67oKbFAe0R45vlUGXAN8DpzilFTHqerz6mYNuAV4teJRz2Mc8DpwR075fooMWAy8BBzslLSPg4BngTvzeswzwJbNM470/8NOqKuyes8ywDbsClmfZi+wz5G2jn3qI43pshKY7TPgEOC1gjW/AOjU2f8k8LNTozw14AngdLV9YU4L46TbmKQw7YkfBh53fjqCKXs0UE/IzNB7gKXq3PgJ2Azs0sfo1mcmMFWyP4DHdDQnR70D+AWY6GgwwoMaPMcA84JDcipZbADOy5Abs4ATdfRtdUobmaYZ3Ah875SO8ClwjiMdYY98hA1UwwnzQIHy6Id5fKdPCFsDjCzqy2b9fuA+EnvAArPbnKqNdDqS6vCFEoul8wEDbgiIbU7Q+qyaDvVVhK2U65MG3FRQOeYfzxJrFV3qy8ei2ICpOsKKqGuWitZmq9itvuqe9iwUnxzpbPctjbd1g2oX64A1nr5M5wWRroE+lnvKq2BZQJs9ke6wRfwGfFJQXhUbtJyKmBvJCRXxLfBXQXlVDAf4lllmwARH3EjNkbQPX6zVHRUEbjFjHUn78DnPrigjIk0zyZG0j6M8PUWm/O+OuBFfI1XiG7y9UcA6s6zbdEdaPTMDDKiZAT84YpeLHUn1XBLQw5ZIcbmP6zzlVXBtQJsbI11CfNhonO+p00rsWnlRQHuDZsBHAYETCieOcKStZ3xgGGER67pIKe5Bp9jlZAV1VV5s7E7yjq6nPkzn7bEPeN5TOcaW0RfAWU5J8/So7bx7d5o+Ek7M8vM7UxXeBG6Vcclc0DxgQLNxaZlMcgY2m1cA7+oi7wssY3Yo5XnAAHNmL6YqHQt8CNyu0dmcKLPfXQm8J8PXKnt2mtOVS4+yfh8r7bIauKxkqv8FpWUa0ipTlPtPBncWyF2uqZ2nEyvv7rxJ+8Tn2S32+rIJ57hLumwnZfU2JaiSTNZS6pZxS5zm/qM3QHl0LQ05ZfJYGiufNsB4To8LSabHORhN3ZIMRW2PfJDTYRZrM2QhDKQPnKxHvjmq2J2Q7daeiFOFk+Rsxmvm+gNuT0kmjuJRb6eydUM+A9BF/30le2P6fI8NJbB2/yxRf1jRwPp0Qd7O71f2K4n9/VSTx2ZMmQRZXVlDR3k8ry8r9N2XmIl79W61SidSTafWDB3DfzutZBNqwLCUX+mUiLwllORc4K2A2HxsiWXRmXEQpLH9tjBv5GPyllAS85DztbGLyHrRycM3AwNyeIXKU8L7DWkmbtbjQxZl1nVe3V/14D1fj95eyrjvutbiSXoSSh+DISF5TDp5ay805twsFrLvkOTufkbzhGpe0DaO/UuAJWEtS2yhRogXjrE4xjy3JZXfAF7OCCb9AP8CMHrsphhEWd8AAAAASUVORK5CYII="
                            ></image>
                            </svg>
                        </Link>
                    </div>
                    <div className={styles.loginButton}>
                    <PainelDeControle/>
                    </div>
                    <br />
                    <br />
                    <ul>
                        <li><Link title="Ancora" href="#__next" scroll={false}>Home</Link></li>
                        <li><Link title="Ancora" href="#Portfolio" scroll={false}>Portfolio</Link></li>
                        <li><Link title="Ancora" href="#Metodos" scroll={false}>Método</Link></li>
                        <li><Link title="Ancora" href="#Preco" scroll={false}><span>Preço</span></Link></li>
                        <li><Link title="Ancora" href="#Contato" scroll={false}>Contato</Link></li>
                    </ul>
                </div>
                <br />
                <br />

            </div>
        </div>  
    </section>
    </>
  )
}
