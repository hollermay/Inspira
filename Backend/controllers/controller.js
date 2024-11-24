const Note = require('../models/note');

const fetchNotes =  async (req, res) => {
    const notes = await Note.find();
    res.json({notes});
};

const fetchNote = async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.json({note});

}

const createNote = async (req, res) => {
    const{title, body} = req.body;

    const note = await Note.create({title: title, body: body});

    res.json({note});
};

const updateNote = async (req, res) => {
        const{title, body} = req.body;
        const noteId = req.params.id;
    
        const note = await Note.findById(noteId);
        note.title = title;
        note.body = body;
    
        await note.save();
    
        res.json({note});
};

const deleteNote = async (req, res) => {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);

    res.json({message: 'Note deleted'});
};

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote, 
    deleteNote
}
