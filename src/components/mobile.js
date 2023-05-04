import './mobile.css'
import { useState } from 'react'
import axios from 'axios'


// export default function MobileNumber(){
//     const [mobileNumber,setMobileNumber] = useState("")
//     // const [otp, setOtp] = useState(" ")

//     function handleMobile(event){
//         //console.log(mobile)
//         setMobileNumber(Number(event.target.value))
//     };
// // /^[1-9]{1}[0-9]{9}$/
// //     function handleOtp(){
// //         if(!/^[6-9]\d{9}$/.test(mobile))
// //         setOtp("Invalid mobile number");
// //         return
// //     };

// //     fetch ("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP" , {
// //     method : "POST",
// //     headers : {
// //         "Content-Type": "application/json"
// // },
// //     body: JSON.stringify({ mobile : mobile})
// // })
// //     .then((response) => {
// //         if (!response.ok) {
// //             throw new Error("Failed to generate OTP")
// //         }else{
// //         setOtp("OTP sent succcessfully")
// //         setMobile(" ")
// //     }
// //     })

// //     .catch((error) => {
// //         setOtp(error.message)
// //     })
    
//     const handleSendData = async () => {
//         let validNumber = validateNumber(mobileNumber)
//         const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
//         const data= {
//             mobile : validNumber,
//         }

//         // const option = {
//         //     method :'POST',
//         //     headers : {
//         //         "Content-Type" : "application/json"
//         //     },
//         //     body : JSON.stringify(data)
//         //}
//     try{
//         const response = await axios.post(url, {
          
//             headers: {
//                     'Content-Type': 'application/json'
//     },
//             body: JSON.stringify(data)
//     });
//             const responseData = await response.json();
//             console.log(responseData);
//             alert(`OTP sent successfully`)
//             } catch (error) {
//             alert(`invalid number`)
//     }
//     //     try{
//     //     fetch (url,option)
//     //     .then(response => (response.json()))
//     //     .then(result=>console.log(result))
//     //     alert(`OTP sent successfully`)
//     //     setMobileNumber("")
//     // }catch(error){
//     //     alert(`invalid number`)
//     // }

//     // try {
//     //     fetch (url,option)
//     //     .then(response => (response.json()))
//     //     .then(result=>console.log(result))
//     //     alert(`OTP sent successfully`)
//     //     setMobileNumber("")
        
//     // } catch (error) {
//     //     alert("please wait for 2 minutes then try again or try some different number for otp");
//     // }
        
//     }

// //validation
//     function validateNumber(input) {
//         const regex = /^[6-9]\d{9}$/;
//         let result = regex.test(input);
//         if (result)
//             return input;
//         else
//             return '';
//     }


    


//  return(
//         <div>
//             <label>
//                 Mobile Number : 
//                 <input  className="field" value={mobileNumber} type="text" placeholder="mobile" onChange={handleMobile}/>
//             </label>
//             <button class="button" onClick={handleSendData}>Get OTP</button>
//             {/* {otp &&<div>{otp}</div>} */}
//         </div>
//     )
// }



const OTPGenerator = () => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
        if(!/^[6-9]\d{9}$/.test(mobile)){
      setError('Invalid mobile number.');
      return;
    }
    try {
      const response = await axios.post(
        'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        { mobile: parseInt (mobile) }
      );
      setSuccess(true);
      setMobile('');
      setTimeout(() => setSuccess(false), 120000); // clear success message after 2 minutes
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Generate OTP</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          className="field"
          type="number"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button class="button"type="submit">Get OTP</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">OTP sent successfully.</p>} 
      
    </div>
    // forgot to mention in the video to render the error and success message I used this ERROR && and success&&
  );
};

export default OTPGenerator;
