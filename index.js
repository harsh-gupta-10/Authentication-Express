const express = require('express');
const cors = require('cors');
const helmet  = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not defined in environment variables');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running');
});