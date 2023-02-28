import styles from '@/styles/Components/InputsAndButtons/CloseBtn/CloseBtn.module.css'
import { useState } from 'react'

export default function CloseBtn() {

  return (
    <> 
    <div className={styles.CloseBtn}>
        <div className={styles.CloseBtnContainer}>
            <div className={styles.OneItem} >

            </div>
            <div className={styles.TwoItem}>

            </div>
        </div>
    </div>

    </>
  )
}
