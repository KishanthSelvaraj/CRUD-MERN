import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  // Sample data
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((res) =>{ console.log(res)
      window.location.reload()})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Home</h1>
      <button>
        <a href="/add">Add</a>
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <td>
                <button>
                  <Link to={`/update/${user._id}`}>Update</Link>
                </button>
                <button  onClick={(e) => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
