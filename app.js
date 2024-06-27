const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
// Modify the URI to connect to the database in Docker
// const mongooseURIDocker = 'mongodb://host.docker.internal:27017/dbProducts';
// Modify the URI to connect to the database in localhost
const mongooseURI = 'mongodb+srv://bryan_quezada:AfOYD6Ju7f70PSA7@cluster0.1yrzoce.mongodb.net/APIReportes?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect((mongooseURI), {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB', error);
});

// Routes
const productsRouter = require('./routers/products'); 
app.use('/api/products', productsRouter);

app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`);
});