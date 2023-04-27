const AuthorsController = require('../controllers/authors.controllers')

module.exports = app => {
    app.get('/api/authors', AuthorsController.getAuthors)
    app.post('/api/authors', AuthorsController.createAuthor)
    app.get('/api/authors/:_id', AuthorsController.getAuthorById)
    app.put('/api/authors/:_id', AuthorsController.updateAuthor)
    app.delete('/api/authors/:_id', AuthorsController.deleteAuthor)
}