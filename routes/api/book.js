const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

const Book = require('../../models/Book');

// @route /book
// @desc getss all book 
router.get('/',async(req,res)=>{
try{
const books = await Book.find().sort();
res.json(books);
}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}
})

// @route /book
// @desc post a book
router.post('/', async(req,res)=>{



try{
   const NewBook = new Book({
       Title: req.body.Title,
       Author:req.body.Author,
       BookType:req.body.BookType
   })    

   const book = await NewBook.save();

   res.json(book);
}catch(err){
console.error(err.message)
res.status(500).send('Server Error');
}

})

module.exports = router;
