import styles from'./header.module.css'
import { ImMenu } from "react-icons/im";
import {useState} from 'react'



export default function Header(){
    const [menu, setMenu] = useState(false)

    function handleClick(){
        setMenu(!menu)

    }
   
    return(
        <headers className={styles.header}>
           <img src="logo1111.png"
            height="40px"
            />
            <h1>Upsi</h1>
            <ImMenu
            className={styles.menu}
            onClick={handleClick}
            />
            
        </headers>
    )
    
}