
const mongoose = require('mongoose');

async function connectdb() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database');
    }
}

module.exports = connectdb;