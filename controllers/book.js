const Book = require('../models/book')
const session = require('express-session')

// add a book - POST
const addBook = async (req, res) => {
    const {title, author, number_of_pages, category, rating} = req.body

    const book = Book({title, author, number_of_pages, category, rating})

    try{
        const newBook = await book.save()

        res.send({
            message: 'Book Successfully Added', newBook
        })
    } catch(error){
        console.log(error)
    }
}

module.exports = {
    addBook
}