import { Link } from 'react-router-dom'
export default function Text(){
    return(
        <div>
            <p>By signing up, you agree to the <Link to="">Terms of Service</Link></p>
            <p> and  <Link to="">Privacy Policy</Link>, 
            including <Link to=""> Cookie Use</Link>.</p>
            <br/>
            <br/>
            <p>Have an account already? <Link to="">Log in</Link></p>

        </div>
    )
}