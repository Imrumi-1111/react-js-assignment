import styles from './Details.module.css'
import { RxCross2 } from 'react-icons/rx';
import DetailsText from './detailsText'
import Input from '../../atoms/inputField/name';
import { Link } from 'react-router-dom';
import GroupedSelect from '../../atoms/inputField/select';
import SignUpButton from '../../atoms/button/signup';

export default function Details(){
    return(
        <div className={styles.Details}>
            <div className={styles.Icon}>
            <RxCross2/>
            </div>
            <h1>Create your account</h1>
            <Input/>
            <p className={styles.p}><Link to="">Use email instead</Link></p>
            <DetailsText/>
            <GroupedSelect/>
            <br/>
            <br/>
            <SignUpButton/>
            
        </div>
    )
}