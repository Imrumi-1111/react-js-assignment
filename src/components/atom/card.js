import styles from './card.module.css'
//import {Fragment} from 'react'

export default function Card({props}){
    const {
        image,
        name ,
        place,
        profession ,
        experience ,
} = props

return(
    <div className={styles.name}>
       <img className={styles.image}
       src={image}/>
       <p><b>{name}</b></p> 
       <p>{place}, {profession},</p>
       <p className={styles.change}>{experience}</p>

    </div>
)
        

    
}