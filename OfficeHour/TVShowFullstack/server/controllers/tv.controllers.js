const Show = require('../models/tv.models');

const findAllShows = (req,res) => {
    Show.find()
    .then((allShows) => {
        res.json({ shows: allShows})
    })
    .catch((err) => {
        res.json({message:'Something went wrong', error: err})
    })
}




module.exports = {
    findAllShows
}