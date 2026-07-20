const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

const contacts = [
  {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com",
    destination: "Forest",
    message: "Beautiful place!"
  },
  {
    id: 2,
    name: "Sara",
    email: "sara@gmail.com",
    destination: "Mountain",
    message: "Amazing view!"
  }
];

app.get("/api/contact", (req, res) => {
  res.status(200).json(contacts);
});

app.post("/api/contact", (req, res) => {

  const { name, email, destination, message } = req.body;

  console.log(name);
  console.log(email);
  console.log(destination);
  console.log(message);


if (!name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }
if (!email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }

  const newContact = {
  id: contacts.length + 1,
  name,
  email,
  destination,
  message,
};

contacts.push(newContact);


res.status(201).json({
  message: "Contact added successfully",
  contact: newContact,
});

});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
