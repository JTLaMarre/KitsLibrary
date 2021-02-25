const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

const Book = require('../../models/Book');

// @route /book
// @desc gets all book 
router.get('/',async(req,res)=>{
try{
const books = await Book.find().sort('Title');
res.json(books);
}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}
})
// @route /book/Dvd
// @desc gets all Dvds 
router.get('/Dvds',async(req,res)=>{
try{
const books = await Book.find({BookType:"Dvd"}).sort('Title');
res.json(books);
}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}
})
// @route /book/Manga
// @desc gets all Manga 
router.get('/Manga',async(req,res)=>{
try{
const books = await Book.find({BookType:"Manga"}).sort('Title');
res.json(books);
}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}
})
// @route /book/Comic
// @desc gets all Comic 
router.get('/Comics',async(req,res)=>{
try{
const books = await Book.find({BookType:"Comic"}).sort('Title');
res.json(books);
}catch(err){
    console.error(err.message);
    res.status(500).send('server error');
}
})
// @route /book/book
// @desc gets all novels 
router.get('/Novels',async(req,res)=>{
try{
const books = await Book.find({BookType:"Book"}).sort('Title');
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
// @desc gets all book 
router.get('/:Title',async(req,res)=>{
    try{
    const title = req.params.Title;
    const book = await Book.find({Title: {$regex: title}});

    res.json(book);
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
    })



   
module.exports = router;
