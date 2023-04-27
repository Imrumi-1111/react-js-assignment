import { useState } from 'react'
import './game.css'
export default function Game(){
    const [luckyNumber, setLuckyNumber] = useState(11)
    const [guessNumber, setGuessNumber] = useState("")
    const [countNumber, setCountNumber] = useState(0)
    

    
    const handleGussedNumber = () => {
    
    const num = parseInt(guessNumber);
    setGuessNumber('')
    setCountNumber(countNumber+1);
    if (num === luckyNumber) {
        alert(`Congratulations, you guessed the right number in ${countNumber + 1} attempts`);
        setLuckyNumber();
        setCountNumber(0);
      } else if (num < luckyNumber) {
        alert('You guessed a smaller number');
      } else {
        alert('You guessed a bigger number');
      }
    };


    return(
        <div className="Game">
            <h1>Guess the lucky number to check your intuition </h1>
            <h2>Between 1 to 20</h2>
            <form>
                <input className="label" type="number" placeholder="Guess lucky number" onChange ={(event)=> setGuessNumber(event.target.value)}></input>
                <button className="btn" onClickCapture={handleGussedNumber}  type="submit"> match the number </button>
                
            </form>
        </div>
    )


};
