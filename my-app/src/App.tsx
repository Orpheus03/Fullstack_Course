import React, { useState } from "react";
import "./App.css";

interface User {
  username: string;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleAddUser = () => {
    const newUser = { username, email };
    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  };

  const handleDeleteUser = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1 className="header">הוספת משתמשים</h1>
      <div className="user-form">
      <input
        type="text"
        placeholder="שם משתמש"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <input
        type="email"
        placeholder= "דואר אלקטרוני"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <button onClick={handleAddUser}>הוספה</button>
        </div>
      <h2 className="user-list header">רשימת משתמשים</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
            <button onClick={() => handleDeleteUser(index)}>מחיקה</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
