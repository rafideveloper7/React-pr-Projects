import { useState } from "react";
import "./index.css";
import Header from "./components/Header.jsx/Header";
import Counter from "./components/Counter/Counter";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import DetailCard from "./components/Card/dataFetch";
import ShowCard from "./components/Card/ShowCard/ShowCard"

function App() {
  const [clickItem, setClickItem] = useState(null); // 🔑 shared state

  return (
    <div className="parent">
      <div className="div1"><Header /></div>
      <div className="div2"><Home /></div>
      <div className="div3"><Counter /></div>
      <div className="div4"><DetailCard setClickItem={setClickItem} /></div>
      <div className="div5"><ShowCard clickItem={clickItem} /></div>
      <div className="div6"><Footer /></div>
    </div>
  );
}

export default App;
