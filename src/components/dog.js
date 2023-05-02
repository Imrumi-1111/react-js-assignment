import "./dog.css"

import { useState, useEffect } from 'react'

export default function DogImages(){
    const [images, setImages] = useState('');
    async function getDogData (){
        try{
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await response.json()
            setImages(data.message)
        }
        catch(error){
            console.log(error)
        }
        
    }
    useEffect(() =>{
        getDogData();
    },[])


    return(
        <div>
            <img className="Dog" src={images} alt="dog"/>
        </div>
    )
}