import React from 'react'
import './nav.css'
import Linkbutton from '../../general/bouton/Linkbutton'
import Logo from '../../icon/Logo'
import Searchinput from '../../general/input/Searchinput'
import Linktext from '../../text/Linktext'
import Acount from '../../icon/Acount'
import Notification from '../../icon/Notification'
import { useLayoutEffect } from 'react'

type Props = {
  connected: boolean,
  setConnected: React.Dispatch<React.SetStateAction<boolean>>
}
type item = { label: string, link: string }

const items:item[]=[{label: 'Home', link: '/'},{label: 'Categories', link: '/category'},{label: 'Meal Planners', link: '/planner'},{label: 'Courses', link: '/courses'},{label: 'About us', link: '/about'},{label: 'Contact', link: '/contact'}]


const Nav = ({ connected, setConnected }: Props) => {
  useLayoutEffect(() => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      setConnected(false);
    }
  })
  const logout = () => {
    localStorage.clear();
  }
  return (
    <div className='navbar'>
      <Logo />
      <ul className='itemsList'>
        {
          items.map((value) => <li>{<Linktext label={value.label} link={value.link} className='navItems' />}</li> )
        }
      </ul>
      {
        connected && <div className='flex'>
        <Searchinput />
        <Linkbutton label='Login' link='/login' className='login' />
        <Linkbutton label='Signup' link='/signup' className='signup' />
      </div>
      }
      {
        !connected && <div className='connectedbutton'>
            <button  ><Acount /></button>
            <button  ><Notification /></button>
            <button className='logButton' onClick={logout} >Logout</button>
          </div>
      }
    </div>
  )
}

export default Nav;