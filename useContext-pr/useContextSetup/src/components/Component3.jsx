import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Component3() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Component 3</h2>
      <p>👤 Current User: {user}</p>
      <button onClick={() => setUser("Baitullah")}>Change User</button>
    </div>
  );
}

export default Component3;