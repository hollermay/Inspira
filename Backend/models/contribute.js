const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Contributor's name
    email: { type: String, required: true }, // Contributor's email
    templateName: { type: String, required: true },
    content: { type: String, required: true },
    approved: { type: Boolean, default: false },
});

const Contribution = mongoose.model("Contribution", contributionSchema);

module.exports = Contribution;
