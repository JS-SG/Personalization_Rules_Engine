# 🛒 LLM-Powered Ecommerce Personalization Rules Engine

## Overview

The **LLM-Powered Ecommerce Personalization Rules Engine** is a mini AI application that analyzes a shopper's browsing session and classifies the user's shopping behavior using Google's Gemini LLM.

Based on the session events, the application predicts the shopper type, provides confidence, explains the evidence behind the prediction, and recommends the best personalization action for the ecommerce website.

---

## Features

* 🤖 LLM-powered shopper classification
* 📊 Confidence score visualization
* 📝 Evidence-based reasoning
* 💡 Personalized recommendations
* 🎮 Interactive session simulator
* 📥 Manual session event input
* ⚡ React + Express full-stack application

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* Google Gemini API
* CORS
* Dotenv

---

## Project Structure

Ecom_Rule_Engine/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   ├── services/
│   ├── data/
│   ├── package.json
│   ├── server.js
│   └── .env
│
└── README.md


---

## Installation

Clone the repository:

```bash
git clone https://github.com/JS-SG/Personalization_Rules_Engine.git
```

Move into the project:

```bash
cd Ecom_Rule_Engine
```

---

## Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend:

```bash
npm run dev
```

The backend runs at:

http://localhost:5000

---

## Frontend Setup

Open a new terminal.

Navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs at:

http://localhost:5173


---

## API Endpoint

### POST `/api/classify`

Example Request:

{
  "events": [
    "Visited Home",
    "Viewed Product",
    "Compared Products",
    "Added to Cart",
    "Exited Website"
  ]
}

Example Response:

{
  "success": true,
  "result": {
    "shopperType": "Cart Abandoner",
    "confidence": 94,
    "evidence": [
      "Viewed multiple products",
      "Added product to cart",
      "Exited before checkout"
    ],
    "recommendedAction": "Send a reminder email with free shipping.",
    "reason": "The user showed strong purchase intent but left before completing the purchase."
  }
}


---

## Future Improvements

* User authentication
* Session history storage
* Dashboard analytics
* Rule-based fallback classifier
* Multi-session comparison
* Database integration (PostgreSQL or Supabase)
* Deployment with Docker
* Real-time personalization engine

---

