import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import './card.css';

function DetailCard({ setClickItem }) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("API error:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong reload!</p>;

  return (
    <div className="users-container">
      {users?.map((user) => (
        <Card key={user.id}>
          <div className="card-body">
            <p>Name : {user.username}</p>
            <p>ID : {user.id}</p>
            <button onClick={() => setClickItem(user)}>More</button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default DetailCard;
