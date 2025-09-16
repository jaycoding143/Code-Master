const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo (Mongoose 7+ handles all defaults internally)
mongoose
    .connect(db)
    .then(() => console.log('Mongoose Connected'))
    .catch((err) => console.log(err));

var cors = require('cors');
app.use(cors());

// Use Routes
app.use('/api/files', require('./routes/api/files'));
app.use('/api/run', require('./routes/api/run'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
