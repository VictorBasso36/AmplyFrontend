

import styles from '@/styles/Components/BarraDeConversao/BarraDeConversao.module.css'
import Link from 'next/link'

export default function BarraDeConversao(props) {
  const NumerosConversao = 'https://api.whatsapp.com/send/?phone=5511994740494&text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+site%2C+e+vi+que+voc%C3%AAs+s%C3%A3o+os+melhores+nisso%2C+pode+me+ajudar%3F&type=phone_number&app_absent=0'
  return (
    <>

    <section className={styles.MainBannerConvert}>
        <div className={styles.MainBannerConvertContainer}>
            <Link title="whatsappAmply" target="_blank" href={NumerosConversao}>
                <pre>{props.tagsconvert}</pre>
            </Link>
                
        </div>
    </section>
    </>
  )
}
