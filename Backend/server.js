if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const readmeController = require('./controllers/readmeController');
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
app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDb();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/logout", authenticateToken, userController.logout); // Added authenticateToken

app.post('/contributions', contributionController.submitContribution);
app.get('/contributions', contributionController.fetchContributions); // Added authenticateToken
app.delete('/contributions/:id', contributionController.deleteContribution);

app.get('/readmes', authenticateToken, readmeController.fetchReadmes); // Added authenticateToken
app.get('/readmes/:id', authenticateToken, readmeController.fetchReadme); // Added authenticateToken
app.post('/readmes', authenticateToken, readmeController.createReadme);
app.put('/readmes/:id', authenticateToken, readmeController.updateReadme);
app.delete('/readmes/:id', authenticateToken, readmeController.deleteReadme);

app.get('/templates', templateController.fetchTemplates); // Added authenticateToken
app.get('/templates/:id', templateController.fetchTemplate); // Added authenticateToken
app.post('/templates', authenticateToken, templateController.createTemplate);
app.put('/templates/:id', authenticateToken, templateController.updateTemplate);
app.delete('/templates/:id', authenticateToken, templateController.deleteTemplate); // Delete a template (auth required)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
