const Product = require('../models/pm.models')

module.exports.getProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {
        res.json({allProducts})})
    .catch((err) => {
        res.json({message: 'Something went wrong', error:err})})
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) =>
    res.json(newProduct))
    .catch(err =>console.log(err))
}
module.exports.getProductById = (req, res) => {
    const {params} = req;
    Product.findOne({_id: params._id})
    .then((product) => res.json(product))
    .catch(err => console.log(err))
}


module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params._id}, req.body,{
        new: true,
        runValidators: true,
    })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err =>console.log(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => console.log(err))
}
