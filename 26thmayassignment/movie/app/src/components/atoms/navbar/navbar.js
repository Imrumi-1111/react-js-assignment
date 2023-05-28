import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    const navBar = [
        'Home',
        'Favourites'
    ]

    return(
        <nav>
            <div className={styles.Navbar}>
                {
                    navBar.map(item=> (
                        <p><Link to={item}>{item}</Link></p>
                    ))
                }
            </div>
        </nav>
    )
}