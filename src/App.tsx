import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components';
import { Label } from './components';
import { Text } from './components';

function App() {
  return (
    <div className="App">
      <Button label="Submit" onClick={() => alert('Form submitted!')} />

     <Label text="Username" htmlFor="username" required />
      <input id="username" type="text" placeholder="Enter your username" />

    <Text size="md" color="muted" align="left">
        Please choose a unique username. It must be at least 6 characters.
      </Text>

    </div>
  );
}

export default App;
