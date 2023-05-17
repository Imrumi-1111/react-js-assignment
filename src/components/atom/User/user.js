import styles from './user.module.css'
import React,{ useState } from 'react'
//import Delete from '../Delete/delete'


export default function Arraylist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
          setTodos([...todos, inputValue.trim()]);
          setInputValue('');
      }
  };

  const handleDeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  return (
    <>   <h1 className={styles.textt}>Delete Name</h1>
    <hr></hr>
   
      <div className={styles.con}>
          
       <div className={styles.another}>
          <div className={styles.center}>
          <div  className={styles.conn}>
     
     <input type="text" className={styles.text}
     value={inputValue} onChange={handleInputChange} />
     <button className={styles.add} onClick={handleAddTodo}>Add</button></div>
         <ul>
              {todos.map((todo, index) => (
                  <li className={styles.list} key={index}>
                      {todo}
                      <button className={styles.btn} onClick={() => handleDeleteTodo(index)}>Delete</button>
                  </li>
              ))}
              </ul>
       </div>
          </div>
      </div>
      </>
  );
}
