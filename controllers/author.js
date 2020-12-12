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

module.exports = {
    addAuthor
}
