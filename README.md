# 🎯 InterviewAI

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-3FA037?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge"/>
</p>

<p align="center">
An AI-powered interview preparation platform built using the MERN Stack. InterviewAI helps users practice technical and HR interviews with AI-generated questions, real-time feedback, performance tracking, and an intuitive user interface.
</p>

---

Live Link: https://interview-ai-zeta-inky.vercel.app/

# 📖 Overview

InterviewAI is a full-stack web application designed to simulate real interview experiences using Artificial Intelligence. The platform enables users to practice interviews, receive intelligent feedback, improve communication skills, and monitor their progress over time.

The application follows a scalable MERN architecture with **React + Vite** for the frontend and **Node.js**, **Express.js**, and **MongoDB** for the backend.

---

# ✨ Features

## 👤 User Features

* User Registration & Login
* Secure JWT Authentication
* User Dashboard
* AI-Based Interview Sessions
* Technical Interview Practice
* HR Interview Practice
* Real-Time AI Responses
* Interview History
* Performance Tracking
* Responsive User Interface

---

## 🤖 AI Features

* AI Interview Questions
* Dynamic Question Generation
* Intelligent Answer Evaluation
* Personalized Feedback
* Difficulty-Based Interviews
* Real-Time Conversation Flow

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Authentication Middleware
* Secure API Access

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* SCSS
* JavaScript (ES6+)
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

### AI Services

* AI Interview Engine
* Natural Language Processing APIs
* Prompt-Based Response Generation

---

# 📂 Project Structure

```text
interviewAi/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   ├── lib/
│   │   ├── style/
│   │   ├── App.jsx
│   │   ├── app.routes.jsx
│   │   └── main.jsx
│   ├── style.scss
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/mayankcharde/interviewAi.git

cd interviewAi
```

---

## Backend Setup

```bash
cd Backend

npm install
```

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

AI_API_KEY=your_ai_api_key
```

Run the backend server:

```bash
npm start
```

or

```bash
node server.js
```

---

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Backend Server Port       |
| MONGO_URI  | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key            |
| AI_API_KEY | AI Service API Key        |

---

# 🤖 AI Capabilities

* AI Interview Simulation
* Technical Interview Questions
* HR Interview Questions
* Adaptive Question Flow
* AI-Based Feedback
* Performance Insights

---

# 📦 Backend Modules

* Authentication
* User Management
* Interview Engine
* AI Services
* Feedback System
* Performance Tracking
* Session History

---

# 🎨 Frontend Highlights

* Responsive Design
* Fast React + Vite
* SCSS Styling
* Modern UI Components
* User-Friendly Interface
* Optimized Performance

---

# ⚡ Performance

* Fast API Responses
* Efficient MongoDB Queries
* Lightweight React Application
* Optimized Vite Build
* Scalable Backend Architecture

---

# 🚀 Future Enhancements

* Voice-Based Interviews
* Video Interview Simulation
* AI Resume Analysis
* Interview Score Reports
* Coding Assessment Module
* Company-Specific Interview Preparation
* Multi-language Support
* Dark Mode
* AI Career Recommendations
* Mock Interview Scheduling

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is developed for educational, learning, and research purposes.

---

# 👨‍💻 Author

**Mayank Charde**

* GitHub: https://github.com/mayankcharde

If you found this project useful, don't forget to ⭐ the repository!
