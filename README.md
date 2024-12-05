# GitIgnodo

GitIgnodo is a web application that allows users to manage and create templates for their projects. The application supports authentication with JWT tokens and provides a simple CRUD (Create, Read, Update, Delete) interface for template management.

## Features

- **User Authentication**: Sign up and log in to access the platform.
- **Template Management**: Create, update, delete, and view templates.
- **Admin Dashboard**: Access to an admin panel for managing templates.

## Tech Stack

- **Frontend**: React, Axios, React Router, Zustand
- **Backend**: Node.js, Express.js, MongoDB, JWT, bcryptjs
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB (via Mongoose)
- **Middleware**: Cookie-parser, Cors, JWT verification

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gitignodio.git
cd gitignodo
```

### 2. Backend Setup

#### a. Install dependencies

Navigate to the backend directory (if you have separated backend and frontend):

```bash
cd backend
npm install
```

#### b. Configure environment variables

Create a .env file in the backend directory with the following variables:

```env
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your Secret Key for JWT>
PORT=3000
```

#### c. Start the backend server

```bash
npm start
```

### 3. Frontend Setup

#### a. Install dependencies

```bash
cd frontend
npm install
```

#### b. Start the frontend server

```bash
npm start
```

This will start the React development server on http://localhost:5173.

## Usage

- **Sign up**: Create a new account by providing your email and password.
- **Log in**: Use your credentials to log in. A JWT token will be returned after successful login.
- **Admin Dashboard**: Once logged in, access the admin panel where you can create and manage templates.

## API Endpoints

### Auth Routes

- **POST /login**: Logs in the user and returns a JWT token.
- **POST /signup**: Creates a new user.

### Template Routes (Protected)

- **GET /templates**: Fetches all templates. Requires authentication (JWT).
- **GET /templates/:id**: Fetches a specific template by ID. Requires authentication (JWT).
- **POST /templates**: Creates a new template. Requires authentication (JWT).
- **PUT /templates/:id**: Updates a template by ID. Requires authentication (JWT).
- **DELETE /templates/:id**: Deletes a template by ID. Requires authentication (JWT).

## Contributing

We welcome contributions to GitIgnodio! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.