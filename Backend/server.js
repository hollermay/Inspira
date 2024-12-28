if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const templateController = require('./controllers/templateController'); // Updated controller
const userController = require('./controllers/userController');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const connectDb = require('./config/connectdb');
const app = express();
const authenticateToken = require('./middleware/requireAuth');
const contributionController = require('./controllers/contributionController');
// Middleware
app.use(express.json());
app.use(cookieParser());

connectDb();
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/logout", userController.logout);

app.post('/contributions', contributionController.submitContribution);
app.get('/contributions', contributionController.fetchContributions);
app.delete('/contributions/:id', contributionController.deleteContribution);


app.get('/templates', templateController.fetchTemplates);  
app.get('/templates/:id', templateController.fetchTemplate);
app.post('/templates', templateController.createTemplate);
app.put('/templates/:id', templateController.updateTemplate);
app.delete('/templates/:id', templateController.deleteTemplate); // Delete a template (auth required)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));