import React from 'react'
import Imagedefault from '../image/data/default.jpg'
import '../assets/profile.css'
import Picture from '../component/icon/Picture'
import { useState, useLayoutEffect, useEffect } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import { useNavigate } from 'react-router-dom'
import UserService from '../service/userService'

type Props = {}



const Profiles = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const verif = localStorage.getItem('token');
        if (!verif) {
            navigate("/");
        }
    })
    const [modif, setModif] = useState<boolean>(false);
	const [file, setForm] = useState<FormData>(new FormData());
    const [pic, setPic] = useState<string>(Imagedefault);   
    const handleModif = (e:any) => {
        e.preventDefault()
        modif? setModif(false):setModif(true)
    }
    const handleChange = (e:any) => {
        const target = e.target;
		const data = target.files[0];
		const creatData = URL.createObjectURL(data);
        setForm(data)
        setPic(creatData)
        
    }
    const userId = localStorage.getItem('id');
    const changingPdp = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4400/api/image', { file, userId }, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
        } catch (error) {
            alert(error);
        }
    }
  return (
      <>
        <div className='profileInformation'>
            <form encType='multipart/form-data'>
                <div className="profilePicture">
                     <img src={pic} alt=""  width='150px' height='150px' className='pdp' />      
                    <button className='modifPdp' onClick={handleModif} > {<Picture />} </button>      
                    {
                        modif && <div className="modifPicture">
                        <input type="file" name="file" id="" onChange={handleChange} />
                        <button onClick={changingPdp}>update</button>
                        </div>       
                    }    
                  </div>
            </form>
        </div>
      </>
  )
}

export default Profiles