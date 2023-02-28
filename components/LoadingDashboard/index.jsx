import Lottie from 'lottie-web';
import animationData from '../../public/loadingAmply.json'
import {  useRef, useEffect  } from 'react'
export default function Loading() {
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
    return (
        <div className='ModalLoading'>
           <div ref={containerRef} className='animationModalLoading'>

            </div> 
        </div>

        
    )
  }
  