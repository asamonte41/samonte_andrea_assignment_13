import React from 'react';
import './App.css';

// Component imports
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';
import { Img } from './components/Img';
import { Table } from './components/Table';
import { TableHeader } from './components/Table/TableHeader';
import { TableRow } from './components/Table/TableRow';
import { TableFooter } from './components/Table/TableFooter';
import { TableCell } from './components/Table/TableCell';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/Radiobutton';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* HeroImage */}
      <HeroImage
        src="https://via.placeholder.com/1200x400"
        alt="Hero banner"
        title="Welcome to the UI Garden"
        subtitle="Explore reusable components"
      />

      {/* Card */}
      <Card title="Card Title" subtitle="Card Subtitle">
        This is a sample card with some content inside.
      </Card>

      {/* Img */}
      <Img
        src="https://via.placeholder.com/150"
        alt="Sample image"
        width={150}
        height={150}
        rounded
      />

      {/* Label and Text */}
      <div style={{ marginTop: '2rem' }}>
        <Label htmlFor="username">Username</Label>
        <Text id="username" children="andrea.samonte" />
      </div>

      {/* Button */}
      <div style={{ marginTop: '1rem' }}>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </div>

      {/* Dropdown */}
      <div style={{ marginTop: '1rem' }}>

      <Dropdown
        label="Choose a fruit"
        name="fruit"
        required
        value="apple"
        onChange={() => {}}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ]}
      />

      </div>

      {/* RadioButton */}
      <div style={{ marginTop: '1rem' }}>
        <RadioButton
          name="gender"
          options={[
            { label: 'Female', value: 'female' },
            { label: 'Male', value: 'male' },
          ]}
          selectedValue="female"
          onChange={(value) => console.log('Selected:', value)}
        required
        />

      </div>

      {/* Table */}
      <table style={{ marginTop: '2rem', width: '100%', borderCollapse: 'collapse' }}>
        <TableHeader headers={['Name', 'Age', 'Occupation']} />
        <tbody>
          <TableRow cells={['Alice', 30, 'Engineer']} />
          <TableRow cells={['Bob', 25, 'Designer']} />
          <TableRow cells={['Charlie', 35, 'Manager']} />
          <tr>
            <TableCell align="right" colSpan={3}>
              Custom Cell Footer
            </TableCell>
          </tr>
        </tbody>
        <TableFooter colSpan={3}>Total Employees: 3</TableFooter>
      </table>
    </div>
  );
}

export default App;