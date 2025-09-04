import { useState } from "react";
import './components/Header/header.css';
import './index.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";

function App() {
  const [currentPage, changeCurrentPage] = useState("home");
  // current only shows var value
  // setCurrentPage ( func ) change value

  return (
    <div className="main">
      {/* parent (App) apna function as a prop child (Header) ko bhej raha hai. */}
      <Header setCurrentPage={changeCurrentPage} />

      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "services" && <Services />}
      {currentPage === "blogs" && <Blogs />}
      {currentPage === "contact" && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;
