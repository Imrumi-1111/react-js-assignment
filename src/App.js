//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 const [counter , setCounter] = useState(0) ;


  function handleIncrease () {
    const newCounter = counter + 1 ;
    setCounter(newCounter) ;
    
  }
  const handleDecrease = () => {
     counter>0 ? setCounter(counter - 1) : setCounter(0) ;
    
    };
   return (
    <div className="App">
      <h4>Count is :</h4>
      <h4>{counter}</h4>

      <button onClick={handleIncrease}>
        Increase the count
      </button>
      <button onClick={handleDecrease}>
        Decrease the count
      </button>



 
    </div>
  );
}

export default App;
