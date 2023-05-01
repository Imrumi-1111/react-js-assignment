import './pickfile.css'
import { useRef } from 'react'

export default function Pickfile (){

    const filepick = useRef(null)

    const handleClick = () => {
        document.getElementById('inputField')
    }



    return(
        <div>
            <input className="input" id="infutField" type="file"/>
            <button className='btn' type="submit" onClick={handleClick}>pick the file</button>
        </div>
    )


    
    
}