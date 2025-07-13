const express = require("express");
const app = express();
const cors = require("cors");
const port = 8002;
const arrayOfUsers = [];


app.use(express.json());
app.use(cors());

app.post("/api/submit", (req, res) => {
  console.log("Received a request to /api/submit");
  console.log("Body:", req.body);
  res.json({ message: "Data received successfully" });
});

app.post("/api/users", async (req, res) => {
  const { name, email } = req.body;

  let user ={
    name: name,
    email: email,
  };
  arrayOfUsers.push(user);
  res.status(201).send("User added");
});

app.get("/api/users", (req, res) => {
  // const users = [
  //   {
  //     name: "john",
  //     email: "john@test.com",
  //   },
  //   {
  //     name: "Achal",
  //     email: "achal@123.com",
  //   },
  // ];0
  res.json(arrayOfUsers);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
