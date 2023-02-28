import styles from '@/styles/Components/InputsAndButtons/InputPasswordLabel.module.css'
import { useState } from 'react'


export default function InputPasswordLabel(props) {
    const [passState, setpassSatate] = useState(false);

    const toggleBtnPass = () => {
        setpassSatate (prevState => !prevState)
    } 
  return (
    <div className={styles.divInputHere}>
    <label className={styles.passInputLabel}>
        <p className={styles.labelInputFont}>Senha</p>
     
               <input required type={passState ? "text" : "password"} className={styles.inputPassword} onChange={props.onChange} value={props.value} placeholder={passState ? "Digite sua senha." : "Digite sua senha."} name={props.name} />
               <div className={styles.iconPass} onClick={toggleBtnPass}>
               {passState ? 
                                   <svg className={styles.youseesvg}
                                   xmlns="http://www.w3.org/2000/svg"
                                   xmlnsXlink="http://www.w3.org/1999/xlink"
                                   width="22"
                                   height="14"
                                   viewBox="0 0 22 14"
                                 >
                                   <image
                                     width="22"
                                     height="14"
                                     xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAYAAAArMezNAAADHklEQVQ4jX1UTWgdVRT+vnvvzJtJ8hJrRawQRepPQZeCiKmm0K2SKo0giJta3AgqSFAoUu3Kna0grdsKahfqonSh1MZNF7pwXatkkwZrDOa95r15M3PPJ/clVjfxwMCcc+75zpk533e5dt8SCMCBIAEKKCrAujUGowwuJbfty5QUuJg8EzCZN/D9DgYdAb6F4KFISELA/xh3QMXUVtPAdiA1J3evw3jQ3ex2oRLoLKB96dl536XoP8DaRjgMIP8nSCNgeBDEOYA3CLsqUgJF6CqIGwDOQdg/PvuvJYzDEhFy1jCEMxJnCNybpqkyfBbb7CXzuuYjTwrYEHg3mND1O6S98nqritmrIdN5Qi+Pv0tYIa2Xh/aAy1yTQgcBrAi8HF1ntS3jXDbMFyY38kcscxnolpzis17NKxI+jF6Y/Ct/ONvKj9RlnDdqVcbLEFYc48HgWrg6lpD8OsiLtOZQqG9eahjv7xf9b2KBr8KwPsHGzpvj9SbgPWR4pyP/ScziF/3y1tcRcZZwlwAeInBR5v4YWQfO5AHpNKRT1PBIMfzlmGszKA8v1EV/IYzW35Rzr4l4amo9b/Zs5p9PWNg/mGoWkWOB5tNWjgF6HsIpoz+dMHlzduksHY+LmEfcWu5Ua2g7BxKnvo1WbZB6NIbytxia5/ZdL8fr+fOBIVThO2+hEDFnjJABHjYvz+/NeNYJOuqcP+rIZbHAaOIhmGsQ2cwgK3ptVv7aaQZvT7Q1mglDr9uijgbI/Wxs9wotEl8SA52zK15YhPhiAHhniidGWypAHHMX1C0PPFZKT9Ib4qjA5h0RvmjRbXJUjHM0v+rox5wnDKkJxAsAL4QdDSCJdaKbIWRh7EfZyX7Prky38fGq638ajUrA1ShAFHX+dL8zeGJUDp+JSQkJuHWYaRxcmg3YlrR5IWuJ6aoDZGmZaXBbbpvq496U/cjGv+99/BQiatPxUTE8UW75M34YfmgZt++a6BEKIqZdxh1gJeBhANaSl37FWH+YLLLX17vxWmj4AUP97jhr3Gqz+MZdvfyjPdVUGuv2+cE9mxjlAiLwN8tXigH1RE70AAAAAElFTkSuQmCC"
                                   ></image>
                                 </svg>   
                                
                                :  <svg className={styles.youseesvg}
                                   xmlns="http://www.w3.org/2000/svg"
                                   xmlnsXlink="http://www.w3.org/1999/xlink"
                                   width="23"
                                   height="10"
                                   viewBox="0 0 23 10"
                                 >
                                   <image
                                     width="23"
                                     height="10"
                                     xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAKCAYAAABfYsXlAAACIklEQVQokZ1SPWhUYRCc3W/fe/eTy0VOEUlMLYKCNjb+QLqItlHBTggIiq2NpdYhRPAHrdU+aGGjEYTYmSIGK0UF4yWSXO4l72d35S6xMxCcZtlmZpgZ+jVy2z3YM2VcqXUF5IC5o2wAborCgHosUDVkqkhCQAiMNCsRTEBSIsQK4RLujDStgMSei9IEeykXVKLLzvEUsE3+PyAygAOckikTmaA8uih51JrVaH1civWXHuKaESa5IAB7VyF2qAa4+UOSzcky1vEsVF7RZvU4TFpQGju9cbAzxyV+1NbDWD6Ipb3FUiCKiyNb1nit4OGhlewMW/wOBYErmx9R6ywNlQNyL0rDhySVpbQpn9wwDUKz74wA+uty59/5Bt1pOtXWYtJtf06y7/Nb9eRupRP2VbYI1B6+hTLit+zJqQNf6kle62Jt/9dJo8Mz7IjMfTaJwgszX8hVv8UhjDDTsSzXS0R8npky8s7NRnvxcZwmWB49myP8fh+pnJMoVGBCd+rLsgAEmBRg/fnIvfUkVrme1arXilKfArBA3FXzupoTRbIg6caNaiQPFMtaCBCjjsZqOLQ2KkfNYjBZBrb8jTNWt0skGFcQVDWYzoD5BLvVyf2qg4Z6l90GEOhkML3PqmpcBcD9EXjAChvNkfa2twucCM4xnCIoU+bAPHkJ5WSegMwhMI7g/fz/vaxdyfvwArAc7torsklwgxfNHiGZoSe2KwWAPxrpG9HnD0gTAAAAAElFTkSuQmCC"
                                   ></image>
                                 </svg>   
                                
                                } 
               </div>
        
    </label>  
</div>
  )
}
