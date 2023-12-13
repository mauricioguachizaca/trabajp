const express = require('express')
const morgan = require('morgan')
const index = require ('./routes/index.router')
const cors = require("cors")
const app = express()
app.use(express.json());

app.use('/usuarios',index);

const options = {
  origin:'*'}

app.use(cors({
  origin: options,
  credentials:true
}));
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/prueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});



app.listen(3000)
console.log(`sever on  port ${3000}`)