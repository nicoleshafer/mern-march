const Author = require('../models/authors.models')

module.exports.getAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json({allAuthors})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error:err})
    })

}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) =>
    res.json(newAuthor))
    .catch((err) => console.log(err))
}