const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now },
    user: {type: String}
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
