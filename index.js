const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoute = require('./routes/product.route.js')
const PORT = process.env.PORT || 5000;
const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//  Routes
app.use('/api/products', productRoute);

//  Test API connection
app.get('/', (req, res) =>{
    res.send("Welcome to CRUD API");
});


//  DB Connection
mongoose.connect(process.env.MONGO_URI) 
.then(()=>{
    console.log("Connected to MongoDB Atlas!");
    
    app.listen(PORT, ()=>{
        console.log(`Server is running in port ${PORT}`)
    });
})
.catch((error)=>{
    console.log("Error connecting to MongoDB: ", error);
})