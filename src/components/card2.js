import React, { useState, useEffect } from "react";
import UserCard from "./card";
import './card.css'

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const data = await response.json();
    setUsers(data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <button onClick={fetchUsers}>Get Users</button>
      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

