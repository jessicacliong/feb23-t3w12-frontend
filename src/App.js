import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`JWT value is: \n${jwt}`);
  }, [jwt]);


  return (
    <div className="App">
      <label>Username:</label>
      <input 
      type='text' 
      name="usernameInput" 
      id="usernameInput" 
      value={username} 
      onChange={(event) => setUsername(event.target.value)}
      />

      <label>Password:</label>
      <input 
      type='text' 
      name="usernameInput" 
      id="usernameInput" 
      value={username} 
      onChange={(event) => setUsername(event.target.value)}
      />

    </div>
  );
}

export default App;
