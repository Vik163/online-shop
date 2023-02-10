const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT = 3001 } = process.env;

const index = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/images_pizza')));

mongoose.connect('mongodb://localhost:27017/storedb', {
  useNewUrlParser: true,
});

const options = {
  originName: ['https://localhost:3000', , 'http://localhost:3000'],
};

app.use('*', cors(options));

app.use(index);

app.listen(PORT, () => {});
