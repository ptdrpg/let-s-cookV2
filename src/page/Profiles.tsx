import React from 'react'
import Imagedefault from '../image/data/default.jpg'
import '../assets/profile.css'
import Picture from '../component/icon/Picture'
import { useState, useEffect } from 'react'
import postImage from '../utils/postImage'

type Props = {}
interface putingType {
  [name: string] : string,
}

type idTyping = {
    userid:string
}

const Profiles = (props: Props) => {
    const [modif, setModif] = useState<boolean>(false);
	const [form, setForm] = useState<any>();

    const [pic, setPic] = useState<string>(Imagedefault);
    
    const handleModif = () => {
        modif? setModif(false):setModif(true)
    }
    const getId = localStorage.getItem('id');
    const handleChange = (e:any) => {
        const target = e.target;
		const data = target.files[0];
		const creatData = URL.createObjectURL(data);
        setPic(creatData);
		setForm({
			...form,
            [target.name]: data.name,
        })  
        console.log(form);
        
    }
    const userId = {
		userId: getId
    }
    const formData = new FormData();
    formData.append('file', form)
    const changingPdp = async () => {
        try {
           await postImage('http://localhost:4400/api/image', {formData, userId} , 'image/jpeg')
        } catch (error) {
            alert(error);
        }
    }
  return (
      <>
        <div className='profileInformation'>
            <div className="profilePicture">
                <img src={pic} alt="" width='150px' height='150px' className='pdp' />      
                <button className='modifPdp' onClick={handleModif} > {<Picture />} </button>      
                {
                    modif && <div className="modifPicture">
                    <input type="file" name="file" id="" onChange={handleChange} />
                    <button onClick={changingPdp}>update</button>
                </div>       
                } 
            </div>
        </div>
      </>
  )
}

export default Profiles