import styles from './mobile.module.css'
import { ImMenu } from "react-icons/im";
import { useNavigate, Link } from 'react-router-dom'



export default function Mobile({ closeFunction }) {
    const navigate = useNavigate()
    return (
        <div className={styles.mobile}>
            <div>
                <ImMenu
                    className={styles.icon}
                    onClick={closeFunction}
                // onClick={handleRedirect}
                />
            </div>
            <div>
                {/* <p onClick={handleRedirect}>Home</p>
                <p onClick={handleRedirect}>About</p>
                <p onClick={handleRedirect}>Projects</p>
                <p onClick={handleRedirect}>Videos</p>
                <p onClick={handleRedirect}>Contact</p>
                <p onClick={handleRedirect}>Login</p> */}
            </div>

            <p><Link to={'./contact'}>Contact</Link></p>
        {/* <p><Link to={'./'}>Home</Link></p> */}
        <p><Link to={'./login'}>Login</Link></p>
        <p><Link to={'./projects'}>Projects</Link></p>
        <p><Link to={'./register'}>Register</Link></p>

        </div>
    )
}
