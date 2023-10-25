import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    label: string,
    link: string,
  className: string,
}

const Linktext = ({ label, link, className }: Props) => {
  return (
    <Link to={link} className={className} key={label}> {label} </Link>
  )
}

export default Linktext;