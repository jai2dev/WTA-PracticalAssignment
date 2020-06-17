//import modules

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



//import databaase

const { mongoose } = require('./db.js');
var appraisalController = require('./controllers/appraisalController.js');



var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(7000, () => console.log('Server started at port : 7000'));


app.use('/appraisals', appraisalController);