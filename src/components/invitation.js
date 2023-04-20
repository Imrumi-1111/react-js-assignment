import { Fragment } from "react"

export function Invitation(props) {

    
    return(
        <Fragment>
        <p>Subject : {props.subject}</p>
        <p> To : {props.emailid}</p>
        <br/>
        <p> Hi, {props.name}</p>
        <br/>
        <p> I am having a {props.invitation} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are</p>
        <p>coming . you know some of them - {props.friends}.</p>
        <br/>
        <p> My house is behind our school , near {props.near}</p>
        <br/>
        <p> I hope you will come and see you soon .</p>
        <br/>
        <p> from {props.host} </p>
        
        

        </Fragment>


    )
}
export default Invitation;


    
        
           
        

