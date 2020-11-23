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

router.delete('/:id', async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id);

        if(!book){
            return res.status(404).json({msg:"book not found"})
        }
        await book.remove();
        res.json({msg:"book removed"})
    }catch(err){
        console.error('Server error');
        res.status(500).send('Server Error')
    }
})
// @route /book
// @desc getss all book 
router.get('/:Title',async(req,res)=>{
    try{
    const book = await Book.findOne({Title:req.params.Title})
    res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
    })

module.exports = router;
