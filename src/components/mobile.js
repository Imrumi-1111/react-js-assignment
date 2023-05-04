import './mobile.css'
import { useState } from 'react'
import axios from 'axios'


export default function MobileNumber(){
    const [mobileNumber,setMobileNumber] = useState("")
    // const [otp, setOtp] = useState(" ")

    function handleMobile(event){
        //console.log(mobile)
        setMobileNumber(Number(event.target.value))
    };
// /^[1-9]{1}[0-9]{9}$/
//     function handleOtp(){
//         if(!/^[6-9]\d{9}$/.test(mobile))
//         setOtp("Invalid mobile number");
//         return
//     };

//     fetch ("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP" , {
//     method : "POST",
//     headers : {
//         "Content-Type": "application/json"
// },
//     body: JSON.stringify({ mobile : mobile})
// })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Failed to generate OTP")
//         }else{
//         setOtp("OTP sent succcessfully")
//         setMobile(" ")
//     }
//     })

//     .catch((error) => {
//         setOtp(error.message)
//     })
    
    async function handleSendData(){
        let validNumber = validateNumber(mobileNumber)
        const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
        const data= {
            mobile : validNumber,
        }

        // const option = {
        //     method :'POST',
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify(data)
        //}
         try{
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    const responseData = await response.json();
                    console.log(responseData);
                    alert(`OTP sent successfully`)
                } catch (error) {
                    alert(`invalid number`)
                }
    //     try{
    //     fetch (url,option)
    //     .then(response => (response.json()))
    //     .then(result=>console.log(result))
    //     alert(`OTP sent successfully`)
    //     setMobileNumber("")
    // }catch(error){
    //     alert(`invalid number`)
    // }

    // try {
    //     fetch (url,option)
    //     .then(response => (response.json()))
    //     .then(result=>console.log(result))
    //     alert(`OTP sent successfully`)
    //     setMobileNumber("")
        
    // } catch (error) {
    //     alert("please wait for 2 minutes then try again or try some different number for otp");
    // }
        
    }


    function validateNumber(input) {
        const regex = /^[6-9]\d{9}$/;
        let result = regex.test(input);
        if (result)
            return input;
        else
            return '';
    }


    


 return(
        <div>
            <label>
                Mobile Number : 
                <input  className="field" value={mobileNumber} type="text" placeholder="mobile" onChange={handleMobile}/>
            </label>
            <button class="button" onClick={handleSendData}>Get OTP</button>
            {/* {otp &&<div>{otp}</div>} */}
        </div>
    )
}