import styles from './option.module.css'
import {Link} from 'react-router-dom'
//import { ImMenu } from "react-icons/im";


export default function Option() {
    const navOption = [

        'Home',
        'About',
        'Projects',
        'Register',
        'Contact',
        'Login'

    ]

    return (
        <div>
            <div className={styles.option}>
                {
                    navOption.map(item => (
                        <p><Link to={item}>{item}</Link></p>
                    ))
                }



            </div>

            <div className={styles.body}>
                <div className={styles.leftBody}>
                    <h1>Be there</h1>
                    <p>Live life whole heartedly</p>
                    <button class={styles.btn}>see how</button>
                </div>
                <div>
                    <img
                        src="./joker.jpeg"
                        alt="joker"
                        border="2rem solid white"
                        height="490rem"
                        width="500rem"
                        padding="2rem"
                    />
                </div>
            </div>

        </div>
    )
}