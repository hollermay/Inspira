if(process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const Note = require('./models/note');
const express = require('express');
const connectdb = require('./config/connectdb');
const app = express();
 

app.use(express.json());
connectdb();

//listen to the port


//Routes
app.get('/notes', async (req, res) => {

    const notes = await Note.find();
    res.json({notes: notes});
});

app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.json({note: note});

});

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.post('/notes', async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.create({title: title, body: body});

    res.json({note: note});
});



app.listen(process.env.PORT)
