import Button from "@mui/material/Button";
import { FaApple } from "react-icons/fa";

export default function AppleButton(){
    return(
        <div>
            <Button variant="outlined" color="primary" href="#outlined-buttons"
            sx={{
                textTransform : "none",
                width :"19rem"
            }}
            > {<FaApple/>} Sign up with Apple </Button>

        </div>
    )

}