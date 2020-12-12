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

// get all books - GET
const getBooks = async (req, res)=>{
    await Book.find({}).exec((error, books)=>{
        if (error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(books)
    })
}


module.exports = {
    addBook,
    getBooks
}