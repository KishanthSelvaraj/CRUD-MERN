// Handle form submission, you can send formData to an API or perform other actions here
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios
      .get("https://crud-mern-server-seven.vercel.app/getuser/" + id)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setAge(res.data.age);
        setPhone(res.data.phone);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://crud-mern-server-seven.vercel.app/update/"+id, { name, age, phone })
      .then((res) => {
        console.log("Form data updated successfully:", res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Update Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value, 10))}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Update;
