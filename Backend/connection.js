const mongoose = require("mongoose");
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const connectionString = `mongodb+srv://${username}:${password}@cluster0.kpsk0ff.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
.then(() => {console.log('MongoDB Connected');})
.catch(error => { console.error('MongoDB Connection Error:', error);});

