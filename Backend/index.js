if(process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const notesController = require('./controllers/controller');
const userController = require('./controllers/userController');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const requireAuth = require('./middleware/requireAuth');
const express = require('express');
const connectDb = require('./config/connectdb');
const app = express();
 

app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectDb();

app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.get('/logout', userController.logout);
app.get('/checkauth',requireAuth, userController.checkAuth);
app.get('/notes', notesController.fetchNotes);
app.get('/notes/:id', notesController.fetchNote);
app.post('/notes', notesController.createNote);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote);



app.listen(process.env.PORT)
