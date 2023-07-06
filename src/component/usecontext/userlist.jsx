import React, { useContext } from 'react';
import { UserContext } from './usecontext';

export default function UserList (){
  const { state, dispatch } = useContext(UserContext);

  const handleDelete = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  return (
    <ul>
      {state.users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul> 
    );
};


