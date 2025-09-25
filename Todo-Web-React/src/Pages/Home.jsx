import { useContext } from "react";
import { RegisterUser } from "../Context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Todo from "../Components/Todo";

function Home() {
  const { user, setUser } = useContext(RegisterUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser"); // clear on logout
    navigate("/login");
  };

  if (!user) {
    return (
      <div
        style={{
          width: "80vw",
          height: "80vh",
          margin: "auto",
          backgroundColor: "#555555ff",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Please Login!</h3>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    );
  }

  return (
    <>
      <div style={{width: "100%", height: "72px", display:"flex", justifyContent: "space-around", alignItems: "center"}}>
        <h1>{user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default Home;
