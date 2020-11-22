const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

const Book = require('../../models/Book');

// @route /book
// @desc posts a book 
router.get('/',(req,res)=>res.send('Books Route'))

module.exports = router;
