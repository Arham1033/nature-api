# 🌿 Nature Contact API

A full-stack web application built with **Node.js, Express.js, and MongoDB**. The project features a responsive nature-themed frontend integrated with a RESTful backend API for managing destination contact requests.

---

## ✨ Features

- 🌿 Responsive Nature-themed UI
- 📱 Mobile-friendly design
- 📨 Submit destination contact requests
- 📋 Display all submitted requests dynamically
- ❌ Delete submitted requests
- 🔄 RESTful API (GET, POST, PUT, DELETE)
- 💾 MongoDB database integration
- ⚡ Frontend and backend integration using Fetch API
- ✅ Basic form validation and error handling

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📁 Project Structure

```
Nature-API/
│
├── models/
│   └── Destination.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/arham1033/nature-api.git
```

### Navigate to the project

```bash
cd nature-api
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### Start the server

```bash
node server.js
```

or

```bash
npm start
```

---

## 🌐 Open the Application

Visit:

```
http://localhost:3000
```

---

## 📡 REST API

### Get all contacts

```
GET /api/destination
```

### Add a contact

```
POST /api/destination
```

### Update a contact

```
PUT /api/destination/:id
```

### Delete a contact

```
DELETE /api/destination/:id
```

---

## 🎯 Learning Objectives

This project demonstrates:

- Express.js routing
- REST API development
- MongoDB CRUD operations
- Mongoose models
- Frontend-backend integration
- Fetch API
- Asynchronous JavaScript
- Responsive web design
- Error handling
- Full-stack application flow

---

## 👨‍💻 Author

**Muhammad Arham**

BS Artificial Intelligence Student

GitHub: https://github.com/arham1033

---

## 📜 License

This project is intended for educational and learning purposes.
