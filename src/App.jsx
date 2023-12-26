import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PricesList/PriceList";
import DashBoard from "./components/DashBoard/DashBoard";
import PhoneBar from "./components/PhoneBar/PhoneBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">Hello from tailwind</h1>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
