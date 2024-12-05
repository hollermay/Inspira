if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const userController = require('./controllers/userController');
const templateController = require('./controllers/templateController');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const connectDb = require('./config/connectdb');
const app = express();
const authenticateToken = require('./middleware/requireAuth');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectDb();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/logout", userController.logout);



app.get('/templates', templateController.fetchTemplates);
app.get('/templates/:id', templateController.fetchTemplate);
app.post('/templates', templateController.createTemplate);
app.put('/templates/:id',templateController.updateTemplate);
app.delete('/templates/:id', templateController.deleteTemplate);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
