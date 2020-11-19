const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({


    Title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
    },
    BookType:{
        type:String
    }

})

module.exports = Book = mongoose.model('book',BookSchema)