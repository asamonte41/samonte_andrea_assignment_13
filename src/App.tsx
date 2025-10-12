import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Label, Text, RadioButton, Dropdown } from './components';

function App() {
  //Declaring varibales
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');


  return (
    <div className="App">
      <Button label="Submit" onClick={() => alert('Form submitted!')} />

     <Label text="Username" htmlFor="username" required />
      <input id="username" type="text" placeholder="Enter your username" />

    <Text size="md" color="muted" align="left">
        Please choose a unique username. It must be at least 6 characters.
      </Text>

     <RadioButton
        label="Choose a color"
        name="color"
        selectedValue={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
        ]}
      />
      <Text size="sm" color="muted" align="left">
        Selected color: {selectedColor || 'None'}
      </Text>


      <Dropdown
  label="Select a fruit"
  name="fruit"
  onChange={(e) => setSelectedFruit(e.target.value)}
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ]}
/>
<Text size="sm" color="muted" align="left">
  Selected fruit: {selectedFruit || 'None'}
</Text>



    </div>
  );
}

export default App;
