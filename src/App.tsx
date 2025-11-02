import React from "react";
import "./App.css";

// Component imports
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";
import { Img } from "./components/Img";
import { TableRow } from "./components/Table/TableRow";
import { TableFooter } from "./components/Table/TableFooter";
import { TableCell } from "./components/Table/TableCell";
import Button from "./components/Button/Button";
import Label from "./components/Label/Label";
import { Text } from "./components/Text";
import { Dropdown } from "./components/Dropdown";

function App() {
  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* HeroImage */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
        }}
      >
        <HeroImage
          src="/images/wp2.jpg"
          alt="Hero banner"
          title=""
          subtitle=""
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <h1 style={{ margin: 0 }}>Business Systems Build and Testing</h1>
          <p>This is for my Hero Image</p>
        </div>
      </div>

      {/* Card */}
      <Card title="Card Title" subtitle="Card Subtitle">
        This is my card sample.
      </Card>

      {/* Img */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Img
          src="/images/imfine.jpg"
          alt="Sample image"
          width={200}
          height={200}
          rounded
        />
      </div>

      {/* Label and Text */}
      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <Label
          htmlFor="username"
          style={{ color: "red", display: "block", marginBottom: "0.25rem" }}
        >
          ASAMONTE41
        </Label>
      </div>

      {/* Text */}
      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <Text id="dtext" style={{ color: "pink" }}>
          DEFAULT TEXT
        </Text>
      </div>

      {/* Button */}
      <div style={{ marginTop: "1rem" }}>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </div>

      {/* Dropdown */}
      <div style={{ marginTop: "1rem" }}>
        <Dropdown
          label="Choose a fruit"
          name="fruit"
          required
          value="apple"
          onChange={() => {}}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
          ]}
        />
      </div>

      {/* Radio Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          flexDirection: "column",
        }}
      >
        <h3>Favourite Utensil?</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <label>
            <input type="radio" name="utensil" value="Spoon" defaultChecked />
            Spoon
          </label>
          <label>
            <input type="radio" name="utensil" value="Fork" />
            Fork
          </label>
          <label>
            <input type="radio" name="utensil" value="Spork" />
            Spork
          </label>
        </div>
      </div>

      {/* Centered Table */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <thead>
            <tr>
              {["Name", "Age", "Occupation"].map((header, index) => (
                <TableCell key={index} isHeader align="center">
                  {header}
                </TableCell>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow cells={["Alice", 20, "Admin"]} />
            <TableRow cells={["Hannah", 45, "Assistant"]} />
            <TableRow cells={["Bob", 20, "HR"]} />
            <tr>
              <TableCell align="center" colSpan={3}>
                Sample of a Table Cell
              </TableCell>
            </tr>
          </tbody>
          <TableFooter colSpan={3}>
            <div style={{ textAlign: "center" }}>
              Total Employees: 3 (Sample of a Table Footer)
            </div>
          </TableFooter>
        </table>
      </div>
    </div>
  );
}

export default App;
