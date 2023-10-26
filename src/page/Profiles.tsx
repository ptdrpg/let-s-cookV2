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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;
		const data = target;
		// const creatData = URL.createObjectUEventTarget & (HTMLInputElement | HTMLTextAreaElement)RL(data);
		// setPic(creatData)
		// setForm({
		// 	...form,
		// 	[target.name]: data.name
		// })
		console.log(data);
	}
  return (
      <>
        <div className='profileInformation'>
            <div className="profilePicture">
                <img src={pic} alt="" width='150px' className='pdp' />      
                <button className='modifPdp' onClick={handleModif} > {<Picture />} </button>      
                {
                    modif && <div className="modifPicture">
                    <input type="file" name="" id="" onChange={handleChange} />  
                </div>       
                } 
            </div>
        </div>
      </>
  )
}

export default Profiles