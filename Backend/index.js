if(process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const notesController = require('./controllers/controller');
const cors = require('cors');
const express = require('express');
const connectdb = require('./config/connectdb');
const app = express();
 

app.use(express.json());
app.use(cors());

connectdb();

app.get('/notes', notesController.fetchNotes);
app.get('/notes/:id', notesController.fetchNote);
app.post('/notes', notesController.createNote);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote);



app.listen(process.env.PORT)
