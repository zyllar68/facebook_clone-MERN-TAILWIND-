const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
var cors = require('cors');

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'lgu-hrmo-payroll-auth-token']
  })
);

// routes
require('./routes')(app);

// app.use((err, req, res, next) => {

//   console.log(err)
  
//   switch (err.codeName) {
//     case 'NotFound':
//       return res.status(404).send('Not Found!');
//     case 'DuplicateKey':
//       return res.status(409).send('Duplicate Key!');
//     case 'DuplicateData':
//       return res.status(409).send('Duplicate Data!');
//     default:
//       return res.status(500).json(`${err}`);
//   }
// })

mongoose.connect(
  process.env.db_url, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
  .then(() => app.listen(8000))
  .catch(err => console.log(err));
