//npm install --save-dev nodemon

const express = require('express');
const mongoose = require("mongoose")
const app = express();
const url='mongodb://localhost/SfqDBex';
const cors = require('cors')


// What is Middleware? It is those methods/functions/operations 
// that are called BETWEEN processing the Request and sending the Response in your application method.

// You NEED express.json() and express.urlencoded() for POST and PUT requests, because
//  in both these requests you are sending data (in the form of some data object) to the 
//  server and you are asking the server to accept or store that data (object), which is 
//  enclosed in the body (i.e. req.body) of that (POST or PUT) Request

// Express provides you with middleware to deal with the (incoming) data (object) in the
// body of the request.
// a. express.json() is a method inbuilt in express to recognize the incoming Request Object 
//    as a JSON Object. This method is called as a middleware in your application using
//    the code: app.use(express.json());
// b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request
//    Object as strings or arrays. This method is called as a middleware in your application 
//    using the code: app.use(express.urlencoded());

// ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. 
// It is developed by the same peeps who built express and is designed to work with express.
//  body-parser used to be part of express. Think of body-parser 
//  specifically for POST Requests (i.e. the .post request object) 
//  and/or PUT Requests (i.e. the .put request object).
// calling body-parser to handle the Request Object from POST requests

// var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
// app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
// app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
// app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors())  //cross-origin resource sharing

//CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API.
// This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

// specific aayi oru site mathram aakennekil
// app.use(cors({
//     origin: 'https://www.section.io'
// }));

//array of origin
// app.use(cors({
//     origin: ['https://www.section.io', 'https://www.google.com/']
// }));

// public annekil
// app.use(cors({
//     origin: '*'
// }));


/// methods 
// app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));


app.use(express.json()) // json format use cheyyaaaan

app.use(express.urlencoded({ extended: true }))  

mongoose.connect(url, { useNewUrlParser: true })  //warning oyivakkaan {}
const con = mongoose.connection  // we will hold on connection
con.on('open', function () {
    console.log("connected...")
})

const todosRouter= require("./router/router")
app.use('/todos',todosRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is running 0n 3000")
})


