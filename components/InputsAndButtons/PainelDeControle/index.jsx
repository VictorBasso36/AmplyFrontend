import styles from '@/styles/Components/InputsAndButtons/PainelDeControle/PainelDeControle.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PainelDeControle() {
  const [logged, SetLogged] = useState(false)
  useEffect(() => {
      if(localStorage.getItem('auth_token')){
        SetLogged(true)
      }
  })
  return (
    <> 
    <Link href={logged ? '/Amply-App/Home' :'/Login' } title="Login da Amply" className={styles.buttonGoLogin}>
        <div className={styles.ButtonGoLogin}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                        >
                          <image
                            width="20"
                            height="21"
                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAACDUlEQVQ4jaWUP2zNURTHP62naUoEHbpURUTCIoRNBwlhEDFY/N8kQtDEaGBowoBEUiH+bB00EgyVCBJju4hBgoUYDFRRpRot/cjxzovnvfa9Jr7Jefmdc8/55Nx73z0NKv+p/cAh4BNwthK4AGiqwY/kj2X+MeAi8A0oACMl4FKgC1gDtGRhpRqAKeAGcB3YC1wFhrLLTuBMUJcBt4B1wJfsoLEKVwRG/jiwJcFjwG5gEDhQ3INes6jzaqtaUJtmsMjvVEfUCXV7xi4k40E4Q+pTdXEu1rLV6mt1Ut2TeScT9kTtiMC42q/OrQEKW66+zOKjGTuc/vNc/7PlMfW+2jwNpGRt6mAWn8rYrvQ/qCtLubMBxrk+yuKejG1WR9VhdZN6RN05G+B8tS9hvXlRG7KrqNuhtuR6MBprAeeoVzL5cfqr1DcZO5h57enfrQfc51+9z4sYyEhXWd4SdUq9Uw/4MP9SUfysDN5dkfcPcLoXEVoBrAfepjVn/DJwuiq7TDMBtwELgbX5LFuBSzkMflZll6lQFSlqON/1Z+Ae0Jvvta4K2eWvtJL6gFcxjoAXdSCljoPTUMhOOnJb73JxEhioKp1eURuT6Hs0FcCbwHGgG+gBvmZCLZXmZRtwLr/74ycGbAQDuhEYzVFeD1iCtuexxYWdAH6UJvaiHJBbgXkzTOxKxZnFEd1OmwD4DRIeqzKKh95UAAAAAElFTkSuQmCC"
                          ></image>
                        </svg>
                        &nbsp; PAINEL DE CONTROLE
        </div>

    </Link>  
    </>
  )
}
