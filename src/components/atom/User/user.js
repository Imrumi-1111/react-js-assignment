import styles from './user.module.css'
import React,{ useState } from 'react'
//import Delete from '../Delete/delete'



const TodoList = () => {
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState('');

  const addName = () => {
    if (newName.trim() !== '') {
      setName([...name, newName]);
      setNewName('');
    }
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addName();
    }
  };

  function handleDelete(i){
    setName(name.filter((data) => data.i !== i));
};



return (
    <div>
        
      <div>
        
        <input
          type="text"
          value={newName}
          onChange={handleInputChange}
          onClick={handleKeyPress}
          placeholder="Enter name"
        />
        <button onClick={addName}>+</button>
      </div>
      <ul>
        {name.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
        
      </ul>
     
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default TodoList;
