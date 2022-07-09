import logo from "./logo.svg";
import "./App.css";
import { Pin } from "./Compo/Pin";
import { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <Pin
        length={4}
        onChange={(value) => {
          setOtp(value);
        }}
      />
      <h2>The value of OTP is {otp}</h2>
    </div>
  );
}

export default App;
