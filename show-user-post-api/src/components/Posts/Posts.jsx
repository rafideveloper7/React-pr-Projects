import React, { useState, useEffect } from "react";
import "./post.css";

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showUser, setShowUser] = useState(null);

  // Fetch posts
  useEffect(() => {
    async function getPosts() {
      try {
        const postResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await postResponse.json();
        setPosts(data);
      } catch (error) {
        console.error("error 404! ", error);
      } finally {
        console.log("post fetched successfully ...");
      }
    }
    getPosts();
  }, []);

  // Fetch users
  useEffect(() => {
    async function getUser() {
      try {
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const gotUsers = await userResponse.json();
        setUsers(gotUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        console.log("Users fetched successfully ...");
      }
    }
    getUser();
  }, []);

  // showing post of selected user
  // yaha filter se her post se ID target karaha ho
  const filteredPosts = posts.filter((post) => post.userId === showUser);
  //   console.log(filteredPosts)
  return (
    <div className="parent">
      <div className="div1">
        <h1>Users</h1>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id}>
              <h2 onClick={() => setShowUser(user.id)}>{user.username}</h2>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
      <div className="div2">
        {/* <h1>Posts</h1> */}
        {showUser ? (
          filteredPosts.length > 0 ? (
            <table
              border={1}
              style={{ borderCollapse: "collapse", width: "100%" }}
            >
              <thead>
                <tr>
                  <th> Post-ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No posts found for this user.</p>
          )
        ) : (
          <p>Click a user to see their posts</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
