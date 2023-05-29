import TextField from "@mui/material/TextField"

export default function Input(){
    return(
        <div>
            <TextField id="filled-basic" label="Name" variant="outlined" 
            sx={{
                width: "30rem"
            }}
            />
            <br/>
            <br/>
            <TextField id="filled-basic" label="Phone" variant="outlined" 
            sx={{
                width: "30rem"
            }}
            />
        </div>
    )
}
