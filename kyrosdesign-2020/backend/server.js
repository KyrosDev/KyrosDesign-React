const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

//App Init
const app = express();
const port = process.env.PORT || 5000;


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Routes
const productsRouter = require('./routes/products');
const emailRouter = require("./routes/emails");
const login = require('./routes/login');
const index = require('./routes/index.js');


//Config
require('dotenv').config();

app.use(cors());
app.use(express.json());


//Connect Mongo
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


//Run Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


//Views
app.use('/', index);
app.use('/login', login);
app.use('/products', productsRouter);
app.use('/emails', emailRouter);