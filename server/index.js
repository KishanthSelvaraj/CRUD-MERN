const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserData = require("./models/model");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");

app.get("/get", (req, res) => {
  UserData.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/post", (req, res) => {
  UserData.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/getuser/:id", async (req, res) => {
  const id = req.params.id;
  UserData.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
 UserData.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age, phone: req.body.phone }
    // { new: true }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  UserData.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
