const Author = require('../models/author')
const session = require('express-session')

// POST to add an author
const addAuthor = async (req,res) => {
    const {name, books} = req.body

    const author = Author({name, books})

    try{
        const newAuthor = await author.save()

        res.send({
            message: 'Author Created Successfully', newAuthor
        })
    } catch (exception){
        console.log(exception)
    }    
}

// get all authors
const getAuthors = async (req, res)=>{
    await Author.find({}).exec((error, authors)=>{
        if (error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(authors)
    })
}

module.exports = {
    addAuthor,
    getAuthors
}
