import { FcGoogle } from 'react-icons/fc'
import Button from "@mui/material/Button";


export default function GoogleButton() {
    return (
        <div>
            <Button variant="outlined" color="primary" href="#outlined-buttons"
            sx={{
                textTransform : "none",
                width :"19rem"
    
            }}
            > {<FcGoogle />} Sign up with Google</Button>
        </div>
    )
}