import styles from'./option.module.css'
//import { ImMenu } from "react-icons/im";


export default function Option(){
    const navOption = [ 
        
        'Home',
        'About',
        'Projects',
        'Register',
        'Contact',
        'Login'
        
    ]
    
    return(
        <div>
        <div className={styles.option}>
            {
                navOption.map(item=> (
                    <p>{item}</p>
                ))
            }
            


        </div>
       
        </div>
    )
}