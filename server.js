const express = require('express');
const connectDB =require('./config/db');

const app = express();

connectDB();


// init middleware
app.use(express.json({extended:false}))
 
app.get('/', function (req, res) {
  res.send('api working')
})

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)})