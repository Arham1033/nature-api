const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const Destination = require("./models/Destination");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("public"));

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.get("/api/destination", async (req, res) => {
  try {
    const contacts = await Destination.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

app.post("/api/destination", async (req, res) => {

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

  const newContact = await Destination.create({

  name,
  email,
  destination,
  message,

});

res.status(201).json({
  message: "Contact added successfully",
  contact: newContact,
});
});

app.put("/api/destination/:id", async (req, res) => {

  const updated = await Destination.findByIdAndUpdate(

    req.params.id,

    req.body,

    { new: true }

  );

  res.json(updated);

});

app.delete("/api/destination/:id", async (req, res) => {

  await Destination.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted Successfully"
  });

});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
