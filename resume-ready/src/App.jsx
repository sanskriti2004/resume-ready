import { useState } from "react";
import Header from "./components/Header.jsx";
import MainForm from "./components/MainForm.jsx";
import Resume from "./components/Resume.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainForm />
      <Resume />
    </>
  );
}

export default App;
