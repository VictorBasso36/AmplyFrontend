import styles from '@/styles/Components/InputsAndButtons/InputSubmited.module.css'
import { useState } from 'react'


export default function InputSubmited(props) {

  return (
        <input type="submit" className={styles.inputSubmited}  value={props.value}  /> 
  )
}


