const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./configs/db.js');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port 5000');
})