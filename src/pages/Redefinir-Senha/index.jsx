import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../../styles/Pages/Login/Login.module.css'
import { ReactDOM } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect, useRef  } from 'react'

import Lottie from 'lottie-web';
import axios from '../../../components/axiosconfig'


import apiaxios from '../../../components/axiosconfig'
import InputEmailLabel from 'components/InputsAndButtons/InputEmailLabel'
import InputPasswordLabel from 'components/InputsAndButtons/InputPasswordLabel'
import InputSubmited from 'components/InputsAndButtons/InputSubmited'

import animationData from '../../../public/LoginLottie.json'

// // obtém o token CSRF e o configura como cabeçalho padrão em cada solicitação
// axios.get('/sanctum/csrf-cookie').then(response => {
//   axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken;
// }).catch(error => {
//   console.error('Erro ao obter o token CSRF:', error);
// });


import { useRouter } from 'next/router';

export default function Nova_Senha() {
  const containerRef = useRef(null);
  useEffect(() => {
      const anim = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationSpeed:2,
        fps: 30, // Definindo a taxa de quadros 
        animationData: animationData,
      });
  
      return () => {
        anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
      };
    }, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez
  
  const history = useRouter ();

  

const [forgot, setForgot] = useState({
    email:'',
    status: '',
    error: '',
})   

const [erroVerifi, setErroVerifi] = useState('')
const handleForgotInput = (e) => {
    e.persist();
    setForgot({...forgot, [e.target.name]: e.target.value})
}

const forgotSubmit = (e) => {
    e.preventDefault();
    const data = {
        email: forgot.email,
    
    }
    apiaxios.post(`api/forgotPassword`, data).then(res => {
            if(res.data.status === 200){
                setForgot({...forgot, status: res.data.status})
                setForgot({...forgot, status: res.data.status})
               
            }
            else
            {   
                setForgot({...forgot, error: res.data.error})
                setForgot({...forgot, error: res.data.error})
                
            }
           
        })
        
   
}
  return (
    <>
        <Head>
          <title>Nova Senha Amply</title>
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
          <meta name="author" content="Grupo Ousía Arqué, Amply, Arqué Lab."></meta>
      </Head>
   

    {/* <div className={styles.MainLogin}>
      <h1>Esta página é apenas para clientes.</h1>
      <div ref={containerRef} style={{marginTop:'0px', marginBottom:'60px', width:'70%', maxWidth:'650px', height: 'auto'}} src="https://baldoo.com.br/Amply/AmplyImages/renamed2.png"></div>
      
    </div> */}


      <main className={styles.MainLogin}>
        <div className={styles.CotainerLogin}>
            <div className={styles.FormHere}>
                <h1 className={styles.welcomeAmply}>Nova Senha</h1>

                <Link href="/" title="Ancora Home Amply">
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
                <form onSubmit={forgotSubmit}>
                  <InputEmailLabel name="email" onChange={handleForgotInput} value={forgot.email}/>
                  <br />
                  {forgot.error ? <div className={styles.retornoMessage}><p>Email Inválido !</p></div> : ''}
                  {forgot.status ?  <div className={styles.retornoMessage}><p>Verifique seu email !</p></div> : ''}
                 
                  <div className={styles.submitArea}>
                      <div className={styles.rememberArea}>                                   
                          <div className={styles.radioRemember}> 

                          </div>
                          
                          </div>
                                
                          <InputSubmited value="Nova Senha"/>
                  </div>
                </form>
            </div>
            <div ref={containerRef} className={styles.AnimationHere}>

            </div>
        </div>
      </main>
   
    </>
  )
}
