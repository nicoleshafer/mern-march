const Author = require('../models/authors.models')

module.exports.getAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json({allAuthors})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', err})
    })

}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((allAuthors) =>
    res.json(allAuthors))
    .catch((err) => console.log(err))
}