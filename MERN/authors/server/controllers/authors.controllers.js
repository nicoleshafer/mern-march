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

module.exports.getAuthorById = (req, res) => {
    const {params} = req;
    Author.findOne({_id:params._id})
    .then((author) => res.json(author))
    .catch((err) => console.log(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then(updatedAuthor =>res.json(updatedAuthor))
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports.deleteAuthor =(req, res) => {
    Author.deleteOne({_id: req.params._id})
    .then((deletedAuthor) => res.json(deletedAuthor))
    .catch(err => console.log(err))
}