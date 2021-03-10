//Imports
const express = require("express");
const path = require("path");

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

//Setsup the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router, for api and html
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//setting a listener to start our server
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})