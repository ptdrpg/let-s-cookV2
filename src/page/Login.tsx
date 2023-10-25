import React from 'react'
import Paragraphe from '../component/text/Paragraphe';
import Google from '../component/icon/Google';
import { TextField } from '@mui/material';
import Linktext from '../component/text/Linktext';
import '../assets/login.css'
import bannerPic from '../image/img/pic.jpeg'

type Props = {}

const Login = (props: Props) => {
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
            <TextField label="username" variant="standard" name='username' />
            <TextField label="Password" type="password" autoComplete="current-password" variant="standard" name='password' />
          </div>
          <div className='forgetPassword'>
            <Paragraphe tag='p' children='Forget password ?' className='formGroupe' />
          </div>
          <div className='connection'>
            <button type='button' className='log' id='Logbutton'  >s'inscrire</button>
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

export default Login;