const mongoose = require('mongoose');

const readmeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    submittedBy: { type: String, required: true },
    submissionMail: { type: String, lowercase: true, required: true },

});

const Readme = mongoose.model('Readme', readmeSchema);

module.exports = Readme;
