let express  = require('express');
let app = express(); // Setup Express App
let port = process.env.PORT || 80; // localhost : PORT=8080 nodemon server.js 
const mongodbService = require('./database.js'); // MongoDB Service


mongodbService.connect(); // Connect to MongoDB


// server listening on port
app.listen(port, function () {
    console.log('Server running on port '+ port);
});