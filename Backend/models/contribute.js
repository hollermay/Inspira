const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
    user: { type: String, required: true }, // Contributor's name
    email: { type: String, required: true }, // Contributor's email
    name: { type: String, required: true },
    content: { type: String, required: true },
    approved: { type: Boolean, default: false },
});

const Contribution = mongoose.model("Contribution", contributionSchema);

module.exports = Contribution;
