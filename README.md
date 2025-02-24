# 🚌 Bus Booking System API

## 📌 Overview
The **Bus Booking System API** is a RESTful API built with **Node.js, Express, and MongoDB**. It allows users to search for buses, book seats, and cancel bookings. Admins can manage buses and routes. The API uses **JWT authentication with refresh tokens** for security and is **containerized with Docker** for easy deployment on **AWS EC2**.

## 🛠️ Tech Stack
- **Backend:** Express.js
- **Database:** MongoDB (local or MongoDB Atlas)
- **Authentication:** JWT (with refresh tokens)
- **Security:** Helmet, CORS, bcrypt.js
- **Middleware:** Morgan, Express Validator
- **Containerization:** Docker
- **Deployment:** AWS EC2

---

## 🚀 Features
### **🔹 Admin Role**
- ✅ **Bus Management:** Add, update, and delete buses.
- ✅ **Route Management:** Add and update bus routes.

### **🔹 User Role**
- ✅ **Bus Search:** View available buses.
- ✅ **Booking and Cancellation:** Book seats and cancel bookings.

### **🔹 Security**
- ✅ **JWT Authentication** with access & refresh tokens.
- ✅ **Input Validation** with `express-validator`.
- ✅ **Security Best Practices** with `helmet`, `compression`, and `bcrypt.js`.

---

## 📂 Project Structure
bus-booking-api/ │-- models/ # Mongoose models (User, Bus, Booking) │-- routes/ # API routes (Auth, Bus, Booking) │-- middleware/ # Auth and validation middleware │-- controllers/ # Business logic for routes │-- .env # Environment variables │-- Dockerfile # Docker container setup │-- server.js # Main entry point │-- README.md # Documentation

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/bus-booking-api.git
cd bus-booking-api
npm install

Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=mongodb://localhost:27017/bus-booking
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
REFRESH_SECRET=your_refresh_secret
REFRESH_EXPIRES_IN=7d

npm start
nodemon server.js
