import React, { useState } from "react";

interface User {
  username: string;
  email: string;
}

const UserForm = ({ onAddUser }: { onAddUser: (user: User) => void }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = { username, email };
    onAddUser(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>הוספת משתמשים</h1> 
      <input
        type="text"
        placeholder="שם משתמש"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="דואר אלקטרוני"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">הוספה</button>
    </form>
  );
};

export default UserForm;
