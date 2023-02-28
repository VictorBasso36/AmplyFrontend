
import styles from '@/styles/Components/Pricing/Pricing.module.css'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import CloseBtn from 'components/InputsAndButtons/closeBTN'
import animationData from '../../../public/airPlaneAmply.json';
import animationData2 from '../../../public/MainAirPlaneAmply.json';
import animationData3 from '../../../public/rocketAmply.json';
import Lottie from 'lottie-web';
export default function Pricing() {
    const containerRef = useRef(null);
    useEffect(() => {
        const anim = Lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationSpeed:2,
          animationData: animationData,
        });
    
        return () => {
          anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
        };
      }, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez
    

    const containerRef2 = useRef(null);
    useEffect(() => {
          const anim = Lottie.loadAnimation({
            container: containerRef2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationSpeed:2,
            animationData: animationData2,
          });
      
          return () => {
            anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
          };
}, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez
    
        
    const containerRef3 = useRef(null);
    useEffect(() => {
            const anim = Lottie.loadAnimation({
              container: containerRef3.current,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationSpeed:2,
              animationData: animationData3,
            });
        
            return () => {
              anim.destroy(); // Garante que a animação seja removida da memória quando o componente for desmontado
            };
          }, []); // Passa um array vazio para garantir que o useEffect seja executado apenas uma vez
        
  return (
    <> 
    <section className={styles.PricingMain} id="Preco">
        <div className={styles.PricingMainContainer}>
        <div className={styles.PrincingCard}>
                <div className={styles.PrincingCardContainer}>
                    <h2>JET PACK</h2>
                    <div className={styles.MainPricingHere}>
                        <div className={styles.Price}>
                            <h3><br /><span>$</span>
                            <strong>997</strong>á vista
                            </h3>     
                        </div>
                        <div className={styles.ParcelaHere}>
                            <p>ou 10X no cartão de crédito.</p>
                        </div>
                        
                    </div>
                    <div className={styles.MainAnimationsCard3} ref={containerRef}>

                    </div>
                    <div className={styles.BeneficiosHere}>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>3 páginas personalizadas.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Formato single page.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Otimização SEO.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Domínio gratuito (1 ano).</p>
                            </div>
                        </div>
                    </div>
                    <Link title="Contrate Amply" target="_blank" href="https://wa.me/5511994740494?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+me+interessei+pelo+Jet+Pack%2C+pode+me+ajudar%3F" className={styles.ButtonConvertLink}>
                        <div className={styles.ButtonConvert}>
                            <h4>CONTRATAR</h4>
                        </div>
                    </Link>
                    
                </div>   
        </div>
        <div className={styles.PrincingCard}>
                <div className={styles.PrincingCardContainer}>
                    <h2>AMPLY PACK</h2>
                    <div className={styles.MainPricingHere}>
                        <div className={styles.Price}>
                            <h3>a partir de<br /><span>$</span>
                            <strong>1.097</strong>á vista
                            </h3>     
                        </div>
                        <div className={styles.ParcelaHere}>
                            <p>ou 10X no cartão de crédito.</p>
                        </div>
                        
                    </div>
                    <div className={styles.MainAnimationsCard1} ref={containerRef2}>

                    </div>
                    <div className={styles.BeneficiosHere}>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Páginas ilimitadas.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Formato livre.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Otimização SEO.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOn}>

                            </div>
                            <div className={styles.TextBeneficios}>
                                <p>Domínio gratuito (2 anos).</p>
                            </div>
                        </div>
                    </div>
                    
                    <Link title="Amply Whatsapp Contratar" href="https://wa.me/5511994740494?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+me+interessei+pelo+Amply+Pack%2C+pode+me+ajudar%3F" target="_blank" className={styles.ButtonConvertLink}>
                        <div className={styles.ButtonConvert}>
                            <h4>CONTRATAR</h4>
                        </div>
                    </Link>
                    
                </div>   
        </div>
        <div className={styles.PrincingCardBlack}>
                <div className={styles.PrincingCardContainerBlack}>
                    <h2>CONTROL PACK <span>. CMS</span></h2>
                    <div className={styles.MainPricingHereBlack}>
                        <div className={styles.PriceBlack}>
                            <h3>a partir de<br /><span>$</span>
                            <strong>147</strong>mensal
                            </h3>     
                        </div>
                        <div className={styles.ParcelaHereBlack}>
                            <p></p>
                        </div>
                        
                    </div>
                    <div className={styles.MainAnimationsCard2} ref={containerRef3}>

                    </div>
                    <div className={styles.BeneficiosHereBlack}>
                        <div className={styles.BeneficioHereBlack}>
                            <div className={styles.BeneficiosCheckedOnBlack}>

                            </div>
                            <div className={styles.TextBeneficiosBlack}>
                                <p>Controle de conteúdo.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOnBlack}>

                            </div>
                            <div className={styles.TextBeneficiosBlack}>
                                <p>Blog.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHereBlack}>
                            <div className={styles.BeneficiosCheckedOnBlack}>

                            </div>
                            <div className={styles.TextBeneficiosBlack}>
                                <p>Hospedagem gratuíta.</p>
                            </div>
                        </div>
                        <div className={styles.BeneficioHere}>
                            <div className={styles.BeneficiosCheckedOnBlack}>

                            </div>
                            <div className={styles.TextBeneficiosBlack}>
                                <p>Domínio gratuito para sempre.</p>
                            </div>
                        </div>
                    </div>
                    
                    <Link title="Amply Link para Whatsapp e atendimento" href="https://wa.me/5511994740494?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+me+interessei+pelo+CONTROL+PACK%2C+pode+me+ajudar%3F" target="_blank" className={styles.ButtonConvertLinkBlack}>
                        <div className={styles.ButtonConvertBlack}>
                            <h4>CONTRATAR</h4>
                        </div>
                    </Link>
                    
                </div>   
        </div>
                    
          
        </div>
    </section>

    </>
  )
}
