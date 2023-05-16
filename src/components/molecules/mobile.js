import styles from './mobile.module.css'
import { ImMenu } from "react-icons/im";
//import {Link} from './react-router-dom'


export default function Mobile({closeFunction,handleRedirect,}){
    return(
        <div className={styles.mobile}>
            <div>
                <ImMenu
                className={styles.icon}
                onClick={closeFunction}
                // onClick={handleRedirect}
                />
            </div>
            <div>
                <p onClick={handleRedirect}>Home</p>
                <p onClick={handleRedirect}>About</p>
                <p onClick={handleRedirect}>Projects</p>
                <p onClick={handleRedirect}>Videos</p>
                <p onClick={handleRedirect}>Contact</p>
                <p onClick={handleRedirect}>Login</p>
            </div>
            
        {/* <Link to={'./contact'}>Contact</Link>
        <Link to={'./home'}>Home</Link>
        <Link to={'./login'}>Login</Link>
        <Link to={'./projects'}>Projects</Link>
        <Link to={'./register'}>Register</Link> */}

        </div>
    )
}
