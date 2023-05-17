import {useNavigate } from 'react-router-dom'



export default function Login(){
    const navigate = useNavigate()
    function handleLogin(){
        navigate("/option")

    }
    return(
        <div>
            <strong>Login to know more</strong>
            <button onClick={handleLogin}>go back to main</button>
        </div>
    )
}