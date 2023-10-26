import React from 'react'
import Imagedefault from '../image/data/default.jpg'
import '../assets/profile.css'
import Picture from '../component/icon/Picture'
import { useState, useEffect } from 'react'


type Props = {}
interface recupInput {
  [name: string]: string,
}

const Profiles = (props: Props) => {
    const [modif, setModif] = useState<boolean>(false);
	const [form, setForm] = useState<recupInput>();

    const [pic, setPic] = useState<string>(Imagedefault);
    const handleModif = () => {
        modif? setModif(false):setModif(true)
    }
    const handleChange = (e:any) => {
        const target = e.target;
		const data = target.files[0];
		const creatData = URL.createObjectURL(data);
        setPic(creatData);
		setForm({
			...form,
			[target.name]: data.name
		})
		console.log(creatData);
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
                </div>       
                } 
            </div>
        </div>
      </>
  )
}

export default Profiles