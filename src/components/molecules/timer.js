import React,{ useState, useEffect } from 'react'

export default function Timer({}){
    const [time, setTime] = useState(60)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime((prevTime)=>
            prevTime-1)
        },1000)
        return()=>clearInterval(time)
    },[])
    const resetAll = () =>{
        setTime(60)
    }
    useEffect(() => {
        if (time === 0) {
          resetAll(true);
        }
      }, [time]);
    
    


    return(
        <div>
            Time remain : {time}s

        </div>
    )
}