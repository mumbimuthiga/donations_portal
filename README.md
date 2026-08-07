# Online Donations Portal

A full-stack web application that simulates an online donation platform. The application allows users to make donations using either a simulated Mobile Money or Card payment process.

The project demonstrates frontend-backend integration, REST API design, responsive UI development, request validation, and simulated payment processing.

## Project Overview

The application provides a simple donation experience where users can:

- Enter their full name
- Enter their email address
- Enter a donation amount
- Choose a payment method
  - Mobile Money
  - Card
- Submit a donation
- Receive loading, success, or failure feedback
- View a security assurance section explaining how their information is handled

The backend validates incoming requests and simulates payment responses without integrating with a real payment provider.

# Project Structure

```
donations-portal/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── schemas.py
│   │   ├── routes.py
│   │   └── services.py
│   ├── requirements.txt
│   └── README.md
│
│
└── README.md
```

---

# Features

- Responsive single-page interface
- Donation form validation
- Simulated payment processing
- RESTful API
- Loading indicators
- Success notifications
- Error handling
- Security assurance section
- Automatic API documentation

---

# API Endpoints

## POST /donations

Creates a simulated donation transaction.



# Running the Project

## Backend

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate it.

Windows

```bash
venv\Scripts\activate
```

Linux/macOS

```bash
source venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run the application.

```bash
uvicorn app.main:app --reload
```

The API will be available at:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

## Frontend

Navigate to the frontend folder.

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Run the development server.

```bash
npm run dev


# Deployment

Frontend

```
https://donations-portal-git-develop-mumbimuthigas-projects.vercel.app
```

Backend

```
https://donations-portal.onrender.com/docs
```

---

