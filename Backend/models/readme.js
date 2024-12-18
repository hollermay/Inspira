const mongoose = require('mongoose');

const readmeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
});

const Readme = mongoose.model('Readme', readmeSchema);

module.exports = Readme;
