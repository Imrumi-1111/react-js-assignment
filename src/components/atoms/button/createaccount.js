import Button from "@mui/material/Button";
//import { black } from '@material-ui/core/colors';

export default function CreateAccountBtn(){
  return (
    <div>
      <Button variant="outlined" color="primary" href="#outlined-buttons"
            sx={{
                textTransform : "none",
                width :"19rem",
                backgroundColor : "black"
            }}
            > Create account </Button>
        
    </div>
  );
}