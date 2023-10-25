import React from 'react'
import style from './Searchinput.module.css'

const NormalInput = () => {
  return (
    <div className={style.input}>
		<input type="text" className={style.textInput} placeholder='search' />
    </div>
  )
}

export default NormalInput