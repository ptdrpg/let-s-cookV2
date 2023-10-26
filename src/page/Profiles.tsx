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
    id:string
}

const Profiles = (props: Props) => {
    const [modif, setModif] = useState<boolean>(false);
	const [form, setForm] = useState<putingType | idTyping>();

    const [pic, setPic] = useState<string>(Imagedefault);
    const [id, setId] = useState<putingType | idTyping>();
    const handleModif = () => {
        modif? setModif(false):setModif(true)
    }
    const handleChange = (e:any) => {
        const target = e.target;
		const data = target.files[0];
		const creatData = URL.createObjectURL(data);
        setPic(creatData);
        const getId = localStorage.getItem('id');
		setForm({
			...form,
            [target.name]: data.name,
        })
        // setId({

        // })
    }
    const changingPdp = () => {
        postImage('http://localhost:4400/api/image', form, 'multipart/form-data')
    }
  return (
      <>
        <div className='profileInformation'>
            <div className="profilePicture">
                <img src={pic} alt="" width='150px' height='150px' className='pdp' />      
                <button className='modifPdp' onClick={handleModif} > {<Picture />} </button>      
                {
                    modif && <div className="modifPicture">
                    <input type="file" name="avatar" id="" onChange={handleChange} />
                    <button onClick={changingPdp}>update</button>
                </div>       
                } 
            </div>
        </div>
      </>
  )
}

export default Profiles