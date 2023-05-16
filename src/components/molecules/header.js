

import styles from'./header.module.css'
import { ImMenu } from "react-icons/im";
import {useState} from 'react'
import Mobile from './mobile'



export default function Header(){
    const [menu, setMenu] = useState(false)

    function showList(){
        setMenu(true)

    }
    function closeList(){
        setMenu(false)
    }
    
    if(menu){
        return <Mobile closeFunction = {closeList}/>
    }
    return(
        
        <headers className={styles.header}>
        <img src="logo1111.png" alt="logo"
            height={45}
            width={45}
            style={{borderRadius : '50%'}}
            />
            <h1>Upsi</h1>
            <ImMenu
            className={styles.menu}
            onClick={showList}
            />
            
        </headers>
    )
    
}