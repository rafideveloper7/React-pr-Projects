import React from "react";
// import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes/PrivateRoutes";
import Home from "./Pages/Home/Home";
import Employees from "./Pages/Employees/Employees.jsx";
import RedirectIfAuthenticated from "./Routes/RedirectIfAuthenticated/RedirectIfAuthenticated";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  console.log("Saved user:", savedUser);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
          </Route>
          {/* <Route element={<footer />} /> */}
        </Route>

        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<div>Page not fund error 404 !!!</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
