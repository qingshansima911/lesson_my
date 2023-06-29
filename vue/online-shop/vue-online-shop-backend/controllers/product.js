const Model = require('../model'); //  模型
const { Product } = Model
const productController = {
  all(req, res) {
    // where 
    Product.find({})
      .populate('manufacturer') //出现在 表关联
      .exec((err, products) => res.json(products))
  },
  byId(req, res) {
    const idParams = req.params.id
    Product.findOne({ _id: idParams })
      .populate('manufacturer') //出现在
      .exec((err, product) => res.json(product))
  },
  create(req, res) {
    const requestBody = req.body
    // console.log(requestBody);
    // mongodb NOSQL JSON BSON Document 适合存放不规则的数据
    // ORM 面向对象思维 new Product()创建实例 
    const newProduct = new Product(requestBody)
    newProduct.save((err, saved) => {
      Product.findOne({ _id: newProduct._id })
        .populate('manufacturer')
        .exec((err, product) => res.json(product))
    })
  },
  update(req, res) {
    const idParams = req.params.id
    let product = req.body
    Product.updateOne({ _id: idParams }, { ...product },
      (err, updated) => res.json(updated))
  },
  remove(req, res) {
    const idParams = req.params.id
    Product.findOne({ _id: idParams })
      .remove((err, removed) => res.json(idParams))
  }
}
module.exports = productController