import styles from '@/styles/Components/InputsAndButtons/InputEmailLabel.module.css'
import { useState } from 'react'


export default function InputEmailLabel(props) {

  return (
    <div className={styles.divInputHere}>
        <label>
            <p className={styles.labelInputFont}>Email</p>
            <input required type="email" className={styles.inputmail} onChange={props.onChange} value={props.value} placeholder='user@gmail.com' name={props.name} />
        </label>  
    </div>
  )
}
