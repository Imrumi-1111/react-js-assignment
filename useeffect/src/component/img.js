import './img.css'
import { useState, useRef, useEffect } from 'react'

export default function Imagechanger() {
    const [image, setImage] = useState("")
    const imageRef = useRef(null)

    const handleClick = () => {
        setImage("https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    }
    useEffect(() => {
        setImage("https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        
    },[])



    return(
        <div>
            <img id="my-image" src={image} alt="Image" ref={imageRef}/> <br/>
            <button id ="btn" onClick={handleClick}>Click</button>
        </div>
    )

}