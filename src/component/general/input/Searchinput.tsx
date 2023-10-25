import React from 'react'
import Search from '../../icon/Search'
import style from './Searchinput.module.css'

const Searchinput = () => {
  return (
    <div className={style.input}>
			<Search />
			<input type="text" className={style.textInput} placeholder='search' />
    </div>
  )
}

export default Searchinput