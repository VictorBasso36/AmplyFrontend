import styles from '@/styles/Components/InputsAndButtons/InputSearchBar.module.css'
import { useState } from 'react'


export default function InputSearchBar(props) {

  return (
    <div className={styles.divInputHere}>
        <label className={styles.searchLabel}>
            <input required type="text" className={styles.inputSearch} onChange={props.onChange} value={props.value} placeholder='Search' name={props.name} />
            <div className={styles.buttonSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <image
                  width="22"
                  height="22"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAB90lEQVQ4jaXVSaiOcRTH8c+9GS5dcmUqlw2ZIoqFIhmKnWxIVjLslL2lhaUsRNkoG0Opq2xMWSCSoQwh88o8y3DD0T/n6vG+htd7f/XUv+d5zvd/nvM/5/e0RITfqD8GYyzGYTha8BoPcAdv8LEuMtWn7g4dWIalCX+ElwkegtHoxmHsx7M6Qnm5JuN5WJ2Aa7iFJ5lp0SCMwiRMyQ124MzfwEuwFl9xEEfwri6VH2rDYizPzbbj+C9vFHBETI2IAxGxJ9cavMZHxN68ZlRjWjEMG/AZ27IEjaoc4pY8i1UY0BNXwDOzZsdw6T+gPbqKU9lBs6rgBbiM83UhjesEPmBuFTwNN7I/m9UVvMfEKrg0/wt86gW4nM8XDK2C27LFequoclqzNgNz3azac4qfVsEPMSZHuVlNT/iNKvgcZmByL8CL0rh+jnYBH8UILES/upB/qyQ1G/dwsQq+i67swZXpYo2qE5vS/fbh28+4nO2OiNgcEacjYmNEtDXgFXMioisi7kfEitrnVXcbmxmXSXyOk7iQg/M2v6QzLWAOJuAVRuaA7MbNHlitHw9Mgy/wvum33dmfLXkG7bkusEOZ0Jr07J3pHXXg6gbzM7vyxyjGXybrMa7jNG7XdMW69O9dZdM/gZtRKc/6LN3W3/3zmtXZzHgUur8DdNn7fXb53YYAAAAASUVORK5CYII="
                ></image>
              </svg>
            </div>
        </label>  
    </div>
  )
}


