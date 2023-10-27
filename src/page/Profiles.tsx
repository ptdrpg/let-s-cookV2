import React from 'react'
import Imagedefault from '../image/data/default.jpg'
import '../assets/profile.css'
import Picture from '../component/icon/Picture'
import { useState, useEffect } from 'react'
import postImage from '../utils/postImage'
import axios from 'axios'
import FormData from 'form-data'

type Props = {}



const Profiles = (props: Props) => {
    const [modif, setModif] = useState<boolean>(false);
	const [form, setForm] = useState<any>();

    const [pic, setPic] = useState<string>(Imagedefault);
    
    const handleModif = (e:any) => {
        e.preventDefault()
        modif? setModif(false):setModif(true)
    }
    const getId = localStorage.getItem('id');
    const formData = new FormData();
    const handleChange = (e:any) => {
        // const FormData = require('form-data');
        const target = e.target;
		const data = target.files[0];
		const creatData = URL.createObjectURL(data);
        formData.append('file', data);
        setForm(formData); 
        setPic(creatData)
        

    }
    const userId = {
		userId: getId
    }
    const data = JSON.stringify(form)
    // const forPosting ={ form, userId}
    const changingPdp = async (e: any) => {
        e.preventDefault();
        try {
            //    await postImage('http://localhost:4400/api/image', {...form, ...userId} , 'multipart/form-data')
            // await axios.post('http://localhost:4400/api/image', forPosting)
            await axios.post('http://localhost:4400/api/image', { form, userId }, {
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