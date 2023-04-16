const TvController = require('../controllers/tv.controllers')

 module.exports = app => {
    app.get('/api/allShows', TvController.findAllShows)
 }