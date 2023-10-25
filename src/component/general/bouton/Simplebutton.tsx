import React from 'react'
import bouton from './button.module.css'

type Props = {
    label: string,
    evenement: any
}


const Simplebutton = ({label, evenement}: Props) => {
  return (
    <button type='button' onClick={evenement} id={bouton.button} className={bouton.simpleButton} > {label} </button>
  )
}

export default Simplebutton;