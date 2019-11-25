const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    

// [CONFIGURE ROUTER]
let User = require('./public/models/user');
let userrouter = require('./routes/users')(app,User);

// [CONFIGURE mongoose]
let db = mongoose.connection;
db.on('error',console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
})

// [CONNECT TO MONGODB SERVER]
mongoose.connect('mongodb://localhost:27017/workmdb', {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(port, () => console.log(`Listening on port ${port}`));


