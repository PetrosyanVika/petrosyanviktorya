import React from 'react';
import { useState } from 'react';
import { users } from './users';



export default function App() {
  const [user, setUser] = useState(users);
  const [userId, setuserId] = useState(null);
  const ToggleActive = (id) => {
    // setuserId(id)
    console.log(id);
    if (userId === id) {
      setuserId(null);
    } else {
      setuserId(id);
    }
  };
  const handleDelete = (id) => {

    const deleted = user.filter(elm => elm.id !== id);
    setUser(deleted);
  };
  return (
    <div className='App'>
      <h1>Blog Page</h1>
      <hr />
      {user.map((elm) => {
        return <div className={Users$} {...userId === elm.id ? 'Active' : ''} />;
      },
        onClick = {}())}=>ToggleActive(elm.id)}
      key={elm.id}>
      <h2>{elm.name}</h2>
      <p>{elm.description}</p>
      <button onClick={() => handleDelete(elm.id)}
        disabled
      >
        Delete</button>
    </div>);
}
