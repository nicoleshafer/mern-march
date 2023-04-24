const AuthorsController = require('../controllers/authors.controllers')

module.exports = app => {
    app.get('/api/authors', AuthorsController.getAuthors)
    app.post('/api/authors', AuthorsController.createAuthor)
}