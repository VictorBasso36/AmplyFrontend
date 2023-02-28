

import styles from '@/styles/Components/Portfolio/Portfolio.module.css'
import Link from 'next/link'
import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CloseBtn from 'components/InputsAndButtons/closeBTN';

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

export default function Portfolio() {
  const [menuPortifolio, setMenuPortifolio] = useState(false)
  const pagination ={
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "</div>";
    },
  };
  return (
    <> 
      <section className={styles.Portfolio} id="Portfolio">
        <div className={styles.PortfolioContainer}>
          <h3><span>Experiência?</span> Temos de sobra!</h3>
          {menuPortifolio &&
      <div className={styles.MenuDesconto} >
        <div className={styles.MenuDescontoContainer}>
          <div className={styles.CloseMenuDesconto} onClick={() => setMenuPortifolio(false)}>
            <CloseBtn></CloseBtn> 
          </div>
          <div className={styles.mainPortfolioTrue}>
          <img onClick={() => setMenuPortifolio(true)} src="https://baldoo.com.br/Amply/AmplyImages/1portfolio.webp" alt="Site feito por Amply - Ousia Arque" />
          <div className={styles.aboutCliente}>
            <h2><strong>#</strong>Nome do Cliente</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gtravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <Link href="google.com" target="_blank" title="sisteclientetal">
              <div>
                <p>ACESSAR SITE</p>
              </div>
            </Link>
          </div>
          </div>
        </div>
       
      </div>
    }
          <Swiper
          spaceBetween={0}
          hashNavigation={{
            watchState: true,
          }}
          pagination={pagination}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className={styles.mySwiper}
        >       
             
            <SwiperSlide className={styles.PageCarrousel}  data-hash="slide1">
              <div className={styles.ImageHere}>
                  <img onClick={() => setMenuPortifolio(true)} src="https://baldoo.com.br/Amply/AmplyImages/1portfolio.webp" alt="Site feito por Amply - Ousia Arque" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.PageCarrousel}  data-hash="slide3">
              <div className={styles.ImageHere}>
                <img onClick={() => setMenuPortifolio(true)} src="https://baldoo.com.br/Amply/AmplyImages/1portfolio.webp" alt="Site feito por Amply - Ousia Arque" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.PageCarrousel}  data-hash="slide4">
              <div className={styles.ImageHere}>
                <img onClick={() => setMenuPortifolio(true)} src="https://baldoo.com.br/Amply/AmplyImages/1portfolio.webp" alt="Site feito por Amply - Ousia Arque" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.PageCarrousel}  data-hash="slide5">
              <div className={styles.ImageHere}>
                <img onClick={() => setMenuPortifolio(true)} src="https://baldoo.com.br/Amply/AmplyImages/1portfolio.webp" alt="Site feito por Amply - Ousia Arque" />
              </div>
            </SwiperSlide>
          
          </Swiper>
           
        </div>
      </section>
    </>
  )
}
