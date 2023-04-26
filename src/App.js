import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [hiddenName, setHiddenName] = useState('********');

  const handleSubmit = (e) => {
    e.preventDefault();
    setHiddenName(name);
    setName('');
  };

  return (
    <div className="App">
      <h1>Hi, my name is : {hiddenName}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
