const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Conexión a MongoDB
const mongooseURI = 'mongodb+srv://bryan_quezada:AfOYD6Ju7f70PSA7@cluster0.1yrzoce.mongodb.net/APIReportes?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongooseURI)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Rutas
const productsRouter = require('./routers/products'); 
app.use('/api/products', productsRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});