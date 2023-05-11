import './App.css';
import Board from './components/atoms/board'

function App() {
  return (
    <div className="App">
    
      <h1 className="tic">Tic-Tac-Toe</h1>
      <Board player1="X" player2="O" />
    </div>
  );
}

export default App;
