import React from 'react'
import './nav.css'
import Linkbutton from '../../general/bouton/Linkbutton'
import Logo from '../../icon/Logo'
import Searchinput from '../../general/input/Searchinput'
import Linktext from '../../text/Linktext'

type Props = {}
type item = { label: string, link: string }

const items:item[]=[{label: 'Home', link: '/'},{label: 'Categories', link: '/category'},{label: 'Meal Planners', link: '/planner'},{label: 'Courses', link: '/courses'},{label: 'About us', link: '/about'},{label: 'Contact', link: '/contact'}]

const Nav = (props: Props) => {
  return (
    <div className='navbar'>
      <Logo />
      <ul className='itemsList'>
        {
          items.map((value) => <li>{<Linktext label={value.label} link={value.link} className='navItems' />}</li> )
        }
      </ul>
      <div className='flex'>
        <Searchinput />
        <Linkbutton label='Login' link='/login' className='login' />
        <Linkbutton label='Signup' link='/signup' className='signup' />
      </div>
    </div>
  )
}

export default Nav;