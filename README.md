![image](https://github.com/user-attachments/assets/6accc5ab-ed27-46d0-a8d9-38b9b4e71945)

# Inspira

Inspira is a full-stack web application designed to help developers manage and create project templates. With features like JWT-based authentication and a robust CRUD interface, it streamlines template management, including .gitignore, README, and package.json. The platform offers both user and admin functionalities, with an accessible admin dashboard for managing templates.

## Features

- **User Authentication**: Sign up and log in to access the platform.
- **Template Management**: Comprehensive CRUD operations for creating, updating, deleting, and viewing templates.
- **Template Contribution**: Users can submit new templates, reviewed by an admin before approval.
- **Template Gallery**: A searchable, filterable gallery with downloadable templates.
- **Admin Dashboard**: Access to an admin panel for managing templates.
- **Role-based Access**: Enhanced security via user roles for admin functionalities.

## Tech Stack

### Frontend
- React with Tailwind CSS
- React Router
- Axios
- Zustand
  
### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- bcryptjs
- Cookie-parser & Cors
- Multer

### Tools Used
- Git
- Vercel
- AWS EC2
- MongoDB Atlas
- Postman
  

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

## Folder Structure
```
Inspira/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   ├── stores/
    │   ├── styles/
    │   ├── App.jsx
    │   └── index.js
    └── public/




```

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

## Future Enhancements

- **Template Generator**: to generate custom templates according to the requirements of the 
user.
- **Plagiarism Checker**: Any user that sends a contribution request, it will pass through a series of checks to understand if it’s already there on the website or not.
- **Template Generator**: Generate custom templates tailored to user requirements.
- **Additional Template Support**: Expand the template gallery with more options for various project types.


## Contributing

We welcome contributions to GitIgnodio! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
