const Joke = require("../models/jokes.model")

const getJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log(err))
}

const getJokeById = (req, res) => {
    const {params} = req;
    Joke.findOne({_id: params._id})
    .then((joke) => res.json(joke))
    .catch(err => console.log(err))
}

const createJoke = (req,res) => {
    const {body}  =req;
    Joke.create(body)
    .then((newJoke) =>
    res.json(newJoke))
    .catch(err =>console.log(err))
}

const updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id:req.params._id}, req.body,{
        new: true,
        runValidators: true,
    })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => console.log(err))
    }


const deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id })
        .then((res) => res.json)(res)
        .catch(err => console.log(err))
};
module.exports = {
    getJokeById,
    getJokes,
    createJoke,
    updateJoke,
    deleteJoke
}



 // ! dojo code below
// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then((allDaUsers) => {
//             res.json({ users: allDaUsers })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }
 
// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => {
//             res.json({ user: oneSingleUser })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
 
// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => {
//             res.json({ user: newlyCreatedUser })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
 
// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => {
//             res.json({ user: updatedUser })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
 
// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
