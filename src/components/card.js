import { useState } from 'react';
import './card.css'


export default function UserCard() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    setUsers(data.data);
  }

  return (
    <div>
      <button className="btn" onClick={getUsers}>Get Users</button>
      
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p className="">{user.email}</p>
        </div>
      ))}
      
    </div>
  );
}
