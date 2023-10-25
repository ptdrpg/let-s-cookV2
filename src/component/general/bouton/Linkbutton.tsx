import React from 'react'
import { Link } from 'react-router-dom'
import bouton from './button.module.css'

type Props = {
    label: string,
    link: string,
    className?: string
}


const Linkbutton = ({label, link, className }: Props) => {
  return (
      <>
        <Link to={link} id={bouton.button} className={className} > {label} </Link>
      </>
  )
}

export default Linkbutton;