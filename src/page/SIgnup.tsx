import React from 'react'
import Paragraphe from '../component/text/Paragraphe';
import Google from '../component/icon/Google';
import { TextField } from '@mui/material';
import Linktext from '../component/text/Linktext';
import '../assets/login.css'
import bannerPic from '../image/img/pic.jpeg'
import { useState, useLayoutEffect } from 'react';
import postuser from '../utils/postuser';
import { useNavigate } from 'react-router-dom';

interface recupInput {
  [name: string]: string,
}

type props = {
  setConnected:React.Dispatch<React.SetStateAction<boolean>>
}

const SIgnup = ({ setConnected }: props) => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
        const verif = localStorage.getItem('token');
        if (!verif) {
            navigate("/");
        }
    }) 
  const [user, setUser] = useState<recupInput>();
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {target} = e
    const { name, value } = target
    setUser({
      ...user,
      [name] : value
    })
  }

  const post = () => {
    postuser('http://localhost:4400/api/user',user, navigate, setConnected);
  }
  return (
    <div className='logContainer'>
      <div className='logBanner'>
      <img src={bannerPic} className='logPicture' />
      <div className='loginForm'>
        <form>
          <div className='formTittle'>
            <Paragraphe tag='h2' children='Welcome Back' className='formGroupe' />
          </div>
          <div className='connectGoogle flex'>
            <Google />
            <Paragraphe tag='p' children='Connect with Google' className='formGroupe' />
          </div>
          <div className='formTittle'><Paragraphe tag='p' children='or' className='formGroupe' /></div>
            <div className='inputForm'>
              <div className="flex">
                <TextField label="firstname" variant="standard" name='firstname' onChange={handle} />
                <TextField label="lastname" variant="standard" name='lastname' onChange={handle} />
              </div>
              <TextField label="username" variant="standard" name='username' onChange={handle} />
            <TextField label="email" variant="standard" type='email' name='email' onChange={handle} />
            <TextField label="Password" type="password" autoComplete="current-password" variant="standard" name='password' onChange={handle} />
          </div>
          <div className='forgetPassword'>
            <Paragraphe tag='p' children='Forget password ?' className='formGroupe' />
          </div>
          <div className='connection'>
            <button type='button' className='log' id='Logbutton' onClick={post} >s'inscrire</button>
          </div>
          <div className='flex sign-in'>
            <Paragraphe tag='p' children={`Don't have an account?`} className='formGroupe' />
            <Linktext label='signup' link='/signup' className='signupLink' />
          </div>
        </form>
      </div>
		</div>
    </div>
  )
}

export default SIgnup;