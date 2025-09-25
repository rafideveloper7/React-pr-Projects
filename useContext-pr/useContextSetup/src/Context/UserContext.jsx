import { createContext, useState } from "react";

// 1. Create Context
export const UserContext = createContext();

// 2. Create Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState("Rafi Ullah");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}